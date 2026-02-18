// src/pages/Auth.jsx
// Login + Signup page. Role selector lets users choose professor or student.

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn, signUp } from '../lib/supabase';
import './Auth.css';

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode]       = useState('login');   // 'login' | 'signup'
  const [role, setRole]       = useState('student'); // 'student' | 'professor'
  const [form, setForm]       = useState({ email: '', password: '', fullName: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');

  function setField(key, val) {
    setForm(f => ({ ...f, [key]: val }));
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required.');
      return;
    }
    if (mode === 'signup' && !form.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    if (mode === 'login') {
      const { error: err } = await signIn({ email: form.email, password: form.password });
      if (err) { setError(err.message); setLoading(false); return; }
      navigate('/');
    } else {
      const { error: err } = await signUp({
        email: form.email,
        password: form.password,
        fullName: form.fullName,
        role,
      });
      if (err) { setError(err.message); setLoading(false); return; }
      setSuccess('Account created! Check your email to confirm, then log in.');
      setMode('login');
    }

    setLoading(false);
  }

  return (
    <div className="auth-shell">
      {/* Background glow blobs */}
      <div className="auth-blob auth-blob--1" />
      <div className="auth-blob auth-blob--2" />

      <div className="auth-card">
        {/* Logo */}
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">{'</>'}</span>
          <span className="auth-logo-text">CodeRunner</span>
        </Link>

        <h1 className="auth-title">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p className="auth-sub">
          {mode === 'login'
            ? 'Sign in to access your dashboard and lectures'
            : 'Join as a professor or a student'}
        </p>

        {/* Mode toggle */}
        <div className="auth-toggle">
          <button
            className={`auth-toggle-btn ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setError(''); setSuccess(''); }}
            type="button"
          >
            Log In
          </button>
          <button
            className={`auth-toggle-btn ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
            type="button"
          >
            Sign Up
          </button>
        </div>

        {/* Role selector — signup only */}
        {mode === 'signup' && (
          <div className="auth-roles">
            <button
              type="button"
              className={`auth-role-card ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              <span className="auth-role-icon">🎓</span>
              <span className="auth-role-label">Student</span>
              <span className="auth-role-desc">Watch lectures & learn</span>
            </button>
            <button
              type="button"
              className={`auth-role-card ${role === 'professor' ? 'active' : ''}`}
              onClick={() => setRole('professor')}
            >
              <span className="auth-role-icon">🧑‍🏫</span>
              <span className="auth-role-label">Professor</span>
              <span className="auth-role-desc">Upload lectures & earn</span>
            </button>
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <input
                className="auth-input"
                type="text"
                placeholder="Dr. Sarah Johnson"
                value={form.fullName}
                onChange={e => setField('fullName', e.target.value)}
                autoComplete="name"
              />
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              placeholder="you@university.edu"
              value={form.email}
              onChange={e => setField('email', e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              className="auth-input"
              type="password"
              placeholder="Min. 6 characters"
              value={form.password}
              onChange={e => setField('password', e.target.value)}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </div>

          {error   && <p className="auth-error">{error}</p>}
          {success && <p className="auth-success">{success}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading
              ? 'Please wait…'
              : mode === 'login' ? 'Log In' : `Create ${role === 'professor' ? 'Professor' : 'Student'} Account`
            }
          </button>
        </form>

        <p className="auth-footer-note">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            className="auth-switch-link"
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setSuccess(''); }}
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}