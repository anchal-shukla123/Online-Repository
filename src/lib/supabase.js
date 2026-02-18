// ============================================================
// src/lib/supabase.js
// Single Supabase client + all DB/storage helpers used across
// AdminPanel, LecturesView, and Auth pages.
// ============================================================

import { createClient } from '@supabase/supabase-js';

// ── Replace these two values with yours from:
//    Supabase Dashboard → Project Settings → API
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─────────────────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────────────────

/** Sign up a new user (professor or student) */
export async function signUp({ email, password, fullName, role }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, role },
    },
  });
  return { data, error };
}

/** Sign in with email + password */
export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

/** Sign out */
export async function signOut() {
  return supabase.auth.signOut();
}

/** Get the currently logged-in user (null if not logged in) */
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user ?? null;
}

/** Subscribe to auth state changes */
export function onAuthChange(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
}

// ─────────────────────────────────────────────────────────────
// PROFILES
// ─────────────────────────────────────────────────────────────

/** Fetch a profile row by user id */
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

/** Update the current user's profile */
export async function updateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
}

// ─────────────────────────────────────────────────────────────
// LECTURES — READ
// ─────────────────────────────────────────────────────────────

/** Fetch all published lectures (student view) */
export async function fetchPublishedLectures({ category, search, sort } = {}) {
  let query = supabase
    .from('lectures')
    .select(`
      *,
      profiles:professor_id ( full_name, avatar_url )
    `)
    .eq('status', 'published');

  if (category && category !== 'All Lectures') {
    query = query.eq('category', category);
  }
  if (search) {
    query = query.ilike('title', `%${search}%`);
  }

  if (sort === 'popular') query = query.order('views', { ascending: false });
  else if (sort === 'alpha') query = query.order('title', { ascending: true });
  else query = query.order('created_at', { ascending: false }); // newest

  const { data, error } = await query;
  return { data: data ?? [], error };
}

/** Fetch all lectures belonging to the logged-in professor */
export async function fetchMyLectures(professorId) {
  const { data, error } = await supabase
    .from('lectures')
    .select('*')
    .eq('professor_id', professorId)
    .order('created_at', { ascending: false });
  return { data: data ?? [], error };
}

/** Increment view count via DB function (no RLS bypass needed) */
export async function incrementViewCount(lectureId) {
  await supabase.rpc('increment_views', { lecture_id: lectureId });
}

// ─────────────────────────────────────────────────────────────
// LECTURES — WRITE
// ─────────────────────────────────────────────────────────────

/** Insert a new lecture row */
export async function createLecture(lectureData) {
  const { data, error } = await supabase
    .from('lectures')
    .insert(lectureData)
    .select()
    .single();
  return { data, error };
}

/** Update any fields on a lecture the current user owns */
export async function updateLectureDB(lectureId, updates) {
  const { data, error } = await supabase
    .from('lectures')
    .update(updates)
    .eq('id', lectureId)
    .select()
    .single();
  return { data, error };
}

/** Delete a lecture the current user owns */
export async function deleteLectureDB(lectureId) {
  const { error } = await supabase
    .from('lectures')
    .delete()
    .eq('id', lectureId);
  return { error };
}

// ─────────────────────────────────────────────────────────────
// STORAGE — VIDEO & THUMBNAIL UPLOAD
// ─────────────────────────────────────────────────────────────

/**
 * Upload a video file to the 'lectures' bucket.
 * Returns the public URL or null on error.
 */
export async function uploadVideo(file, professorId) {
  const ext = file.name.split('.').pop();
  const path = `${professorId}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from('lectures')
    .upload(path, file, { cacheControl: '3600', upsert: false });

  if (error) return { url: null, error };

  const { data } = supabase.storage.from('lectures').getPublicUrl(path);
  return { url: data.publicUrl, error: null };
}

/**
 * Upload a thumbnail image to the 'thumbnails' bucket.
 * Returns the public URL or null on error.
 */
export async function uploadThumbnail(file, professorId) {
  const ext = file.name.split('.').pop();
  const path = `${professorId}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from('thumbnails')
    .upload(path, file, { cacheControl: '3600', upsert: false });

  if (error) return { url: null, error };

  const { data } = supabase.storage.from('thumbnails').getPublicUrl(path);
  return { url: data.publicUrl, error: null };
}

// ─────────────────────────────────────────────────────────────
// EARNINGS
// ─────────────────────────────────────────────────────────────

/** Fetch all earnings rows for a professor */
export async function fetchEarnings(professorId) {
  const { data, error } = await supabase
    .from('earnings')
    .select('*')
    .eq('professor_id', professorId)
    .order('created_at', { ascending: false });
  return { data: data ?? [], error };
}

/** Total earnings for a professor */
export async function totalEarnings(professorId) {
  const { data } = await supabase
    .from('earnings')
    .select('amount')
    .eq('professor_id', professorId);
  if (!data) return 0;
  return data.reduce((sum, r) => sum + Number(r.amount), 0);
}

// ─────────────────────────────────────────────────────────────
// DASHBOARD STATS (professor)
// ─────────────────────────────────────────────────────────────

/** Aggregate stats for the professor's dashboard */
export async function fetchDashboardStats(professorId) {
  const [lecturesRes, earningsRes] = await Promise.all([
    supabase
      .from('lectures')
      .select('id, views, status')
      .eq('professor_id', professorId),
    supabase
      .from('earnings')
      .select('amount')
      .eq('professor_id', professorId),
  ]);

  const lectures = lecturesRes.data ?? [];
  const earnings = earningsRes.data ?? [];

  const totalViews    = lectures.reduce((s, l) => s + (l.views || 0), 0);
  const totalEarnings = earnings.reduce((s, e) => s + Number(e.amount), 0);
  const published     = lectures.filter(l => l.status === 'published').length;

  return { totalLectures: lectures.length, totalViews, totalEarnings, published };
}

// ─────────────────────────────────────────────────────────────
// FORMATTING HELPERS (shared UI)
// ─────────────────────────────────────────────────────────────

export function formatViews(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'K';
  return String(n ?? 0);
}

export function formatEarnings(n) {
  return '$' + Number(n || 0).toLocaleString();
}

export const CATEGORIES = [
  'Programming', 'Data Structures', 'Algorithms', 'DBMS',
  'Operating Systems', 'Computer Networks', 'Machine Learning',
  'Web Development', 'Python', 'JavaScript',
];

export const SEMESTERS = [
  'Semester 1', 'Semester 2', 'Semester 3', 'Semester 4',
  'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8',
];

export const THUMB_COLORS = [
  '#00d9ff', '#b829ff', '#ff3366', '#00ff88', '#ffd93d', '#ff6b35',
];

export function randomThumbColor() {
  return THUMB_COLORS[Math.floor(Math.random() * THUMB_COLORS.length)];
}