/**
 * Lectures Store
 * Central data management for lectures with localStorage persistence.
 * Shared between AdminPanel and LecturesView.
 */

const STORAGE_KEY = 'coderunner_lectures';

export const CATEGORIES = [
  'Programming',
  'Data Structures',
  'Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'Machine Learning',
  'Web Development',
  'Python',
  'JavaScript',
];

export const SEMESTERS = [
  'Semester 1', 'Semester 2', 'Semester 3',
  'Semester 4', 'Semester 5', 'Semester 6',
  'Semester 7', 'Semester 8',
];

// Seed data — shown on first load before any uploads
const SEED_LECTURES = [
  {
    id: 'seed-1',
    title: 'Introduction to Data Structures – Arrays & Linked Lists',
    description: 'A comprehensive introduction to fundamental data structures. We cover arrays, dynamic arrays, singly and doubly linked lists with full implementation in C++ and Python.',
    category: 'Data Structures',
    semester: 'Semester 2',
    professor: 'Dr. Sarah Johnson',
    professorInitials: 'SJ',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#00d9ff',
    duration: '45:32',
    views: 125000,
    earnings: 620,
    status: 'published',
    uploadedAt: '2026-01-10T10:00:00Z',
    tags: ['arrays', 'linked lists', 'C++', 'Python'],
  },
  {
    id: 'seed-2',
    title: 'Advanced Algorithms – Graph Theory & Shortest Path',
    description: 'Deep dive into graph algorithms: BFS, DFS, Dijkstra\'s algorithm, Bellman-Ford, and Floyd-Warshall. Real-world applications included.',
    category: 'Algorithms',
    semester: 'Semester 4',
    professor: 'Prof. Michael Chen',
    professorInitials: 'MC',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#b829ff',
    duration: '1:12:45',
    views: 89000,
    earnings: 445,
    status: 'published',
    uploadedAt: '2026-01-12T14:00:00Z',
    tags: ['graphs', 'BFS', 'DFS', 'Dijkstra'],
  },
  {
    id: 'seed-3',
    title: 'Database Normalization & SQL Joins Explained',
    description: 'Master database design principles. 1NF through BCNF normalization with worked examples, plus INNER, LEFT, RIGHT and FULL OUTER JOINs.',
    category: 'DBMS',
    semester: 'Semester 3',
    professor: 'Dr. Emily Rodriguez',
    professorInitials: 'ER',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#ff3366',
    duration: '38:20',
    views: 67000,
    earnings: 335,
    status: 'published',
    uploadedAt: '2026-01-15T09:00:00Z',
    tags: ['SQL', 'normalization', 'joins', 'DBMS'],
  },
  {
    id: 'seed-4',
    title: 'Python for Machine Learning – Complete Beginner Guide',
    description: 'Everything you need to start ML in Python: NumPy, Pandas, Matplotlib, and Scikit-learn. Covers linear regression, classification, and clustering.',
    category: 'Machine Learning',
    semester: 'Semester 5',
    professor: 'Dr. Sarah Johnson',
    professorInitials: 'SJ',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#00ff88',
    duration: '52:15',
    views: 98000,
    earnings: 490,
    status: 'published',
    uploadedAt: '2026-01-18T11:00:00Z',
    tags: ['Python', 'ML', 'NumPy', 'Pandas'],
  },
  {
    id: 'seed-5',
    title: 'Operating Systems – Process Scheduling Deep Dive',
    description: 'Understand CPU scheduling algorithms: FCFS, SJF, Round Robin, Priority Scheduling, and Multilevel Queue with Gantt chart simulations.',
    category: 'Operating Systems',
    semester: 'Semester 4',
    professor: 'Prof. Michael Chen',
    professorInitials: 'MC',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#ffd93d',
    duration: '2:05:30',
    views: 54000,
    earnings: 270,
    status: 'published',
    uploadedAt: '2026-01-20T08:00:00Z',
    tags: ['OS', 'scheduling', 'processes', 'CPU'],
  },
  {
    id: 'seed-6',
    title: 'React Hooks Masterclass – useState to useContext',
    description: 'Complete guide to React 18 hooks. useState, useEffect, useCallback, useMemo, useRef, useContext, and custom hooks with real project examples.',
    category: 'Web Development',
    semester: 'Semester 6',
    professor: 'Dr. Emily Rodriguez',
    professorInitials: 'ER',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailColor: '#b829ff',
    duration: '41:18',
    views: 340000,
    earnings: 1700,
    status: 'published',
    uploadedAt: '2026-01-22T13:00:00Z',
    tags: ['React', 'hooks', 'JavaScript', 'frontend'],
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

export function getLectures() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  // First visit — persist seed data
  saveLectures(SEED_LECTURES);
  return SEED_LECTURES;
}

export function saveLectures(lectures) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lectures));
  } catch (_) {}
}

export function addLecture(lecture) {
  const all = getLectures();
  const updated = [lecture, ...all];
  saveLectures(updated);
  return updated;
}

export function deleteLecture(id) {
  const updated = getLectures().filter(l => l.id !== id);
  saveLectures(updated);
  return updated;
}

export function updateLecture(id, patch) {
  const updated = getLectures().map(l => l.id === id ? { ...l, ...patch } : l);
  saveLectures(updated);
  return updated;
}

export function incrementViews(id) {
  updateLecture(id, {
    views: (getLectures().find(l => l.id === id)?.views ?? 0) + 1,
  });
}

export function formatViews(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return String(n);
}

export function formatEarnings(n) {
  return '$' + n.toLocaleString();
}

export function generateId() {
  return 'lec-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

const THUMB_COLORS = ['#00d9ff', '#b829ff', '#ff3366', '#00ff88', '#ffd93d', '#ff6b35'];
export function randomThumbColor() {
  return THUMB_COLORS[Math.floor(Math.random() * THUMB_COLORS.length)];
}