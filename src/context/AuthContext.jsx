// src/context/AuthContext.jsx
// Provides useAuth() hook to any component in the tree.
// Wraps the entire app in App.jsx.

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, getProfile, onAuthChange } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);   // raw Supabase auth user
  const [profile, setProfile] = useState(null);   // our profiles row (role, name …)
  const [loading, setLoading] = useState(true);

  // Load profile whenever the auth user changes
  async function loadProfile(authUser) {
    if (!authUser) { setProfile(null); return; }
    const { data } = await getProfile(authUser.id);
    setProfile(data ?? null);
  }

  useEffect(() => {
    // Get the session that exists on page load
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      setUser(u);
      loadProfile(u).finally(() => setLoading(false));
    });

    // Subscribe to future auth state changes (login / logout)
    const { data: { subscription } } = onAuthChange((authUser) => {
      setUser(authUser);
      loadProfile(authUser);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,       // supabase auth user object (has .id, .email …)
    profile,    // profiles table row (has .role, .full_name …)
    loading,    // true while initial session is being resolved
    isProfessor: profile?.role === 'professor',
    isStudent:   profile?.role === 'student',
    isLoggedIn:  !!user,
    // Expose refreshProfile so pages can force-reload after updates
    refreshProfile: () => loadProfile(user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Use this hook inside any component to access auth state */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}