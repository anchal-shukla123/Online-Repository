import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  fetchPublishedLectures,
  incrementViewCount,
  formatViews,
  CATEGORIES,
} from "../lib/supabase";
import "./LecturesView.css";

// ─── Video Player Modal ───────────────────────────────────────────────────────
function VideoModal({ lecture, onClose }) {
  const videoRef = useRef();

  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!hasIncremented.current) {
      incrementViewCount(lecture.id);
      hasIncremented.current = true;
    }

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lecture.id]);

  return (
    <div
      className="lv-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lv-modal">
        <div className="lv-modal-header">
          <div className="lv-modal-title-block">
            <span className="lv-modal-cat">{lecture.category}</span>
            <h2 className="lv-modal-title">{lecture.title}</h2>
            <div className="lv-modal-meta">
              <span>
                👤{" "}
                {lecture.profiles?.full_name ||
                  lecture.professor ||
                  "Professor"}
              </span>
              <span>👁 {formatViews(lecture.views)} views</span>
              {lecture.duration && <span>⏱ {lecture.duration}</span>}
            </div>
          </div>
          <button className="lv-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="lv-modal-player">
          <video
            ref={videoRef}
            src={lecture.video_url}
            controls
            autoPlay
            className="lv-video-player"
            onError={(e) => {
              // If the blob URL expired, show a friendly message
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="lv-video-error" style={{ display: "none" }}>
            <span className="lv-error-icon">🎬</span>
            <p>
              Video preview unavailable — this would stream from your server in
              production.
            </p>
          </div>
        </div>

        <div className="lv-modal-body">
          <div className="lv-modal-info">
            <div className="lv-modal-desc-block">
              <h3 className="lv-modal-sec-title">About this Lecture</h3>
              <p className="lv-modal-desc">
                {lecture.description || "No description provided."}
              </p>
              {lecture.tags && lecture.tags.length > 0 && (
                <div className="lv-modal-tags">
                  {lecture.tags.map((t) => (
                    <span key={t} className="lv-tag">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="lv-modal-side-info">
              <div className="lv-info-box">
                <span className="lv-info-label">Professor</span>
                <span className="lv-info-val">
                  {lecture.profiles?.full_name ||
                    lecture.professor ||
                    "Professor"}
                </span>
              </div>
              {lecture.semester && (
                <div className="lv-info-box">
                  <span className="lv-info-label">Semester</span>
                  <span className="lv-info-val">{lecture.semester}</span>
                </div>
              )}
              <div className="lv-info-box">
                <span className="lv-info-label">Category</span>
                <span className="lv-info-val">{lecture.category}</span>
              </div>
              <div className="lv-info-box">
                <span className="lv-info-label">Uploaded</span>
                <span className="lv-info-val">
                  {new Date(lecture.uploadedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Lecture Card ─────────────────────────────────────────────────────────────
function LectureCard({ lecture, onClick }) {
  return (
    <div className="lv-card" onClick={onClick}>
      <div
        className="lv-card-thumb"
        style={{
          background: lecture.thumbnail_url
            ? "black"
            : `linear-gradient(135deg, ${lecture.thumbnail_color || "#00d9ff"}22, ${lecture.thumbnail_color || "#00d9ff"}55)`,
        }}
      >
        {lecture.thumbnail_url ? (
          <img src={lecture.thumbnail_url} alt="" className="lv-card-img" />
        ) : (
          <div
            className="lv-card-thumb-inner"
            style={{ "--tc": lecture.thumbnail_color || "#00d9ff" }}
          >
            <span className="lv-card-icon">▶</span>
          </div>
        )}
        <div className="lv-card-overlay">
          <div className="lv-card-play-btn">
            <span>▶ Watch Now</span>
          </div>
        </div>
        <span className="lv-card-duration">{lecture.duration}</span>
      </div>

      <div className="lv-card-body">
        <div className="lv-card-cats">
          <span className="lv-cat-pill">{lecture.category}</span>
          {lecture.semester && (
            <span className="lv-sem-pill">{lecture.semester}</span>
          )}
        </div>
        <h3 className="lv-card-title">{lecture.title}</h3>
        <p className="lv-card-desc">
          {lecture.description || "No description provided."}
        </p>
        <div className="lv-card-footer">
          <div className="lv-card-prof">
            <div className="lv-prof-avatar">
              {(lecture.profiles?.full_name || lecture.professor || "?")
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <span className="lv-prof-name">
              {lecture.profiles?.full_name || lecture.professor || "Professor"}
            </span>
          </div>
          <span className="lv-card-views">👁 {formatViews(lecture.views)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Trending Sidebar ─────────────────────────────────────────────────────────
function TrendingSidebar({ lectures, onSelect }) {
  const trending = [...lectures]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  const recommended = [...lectures].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <aside className="lv-sidebar">
      <div className="lv-sidebar-section">
        <h3 className="lv-sidebar-title">
          <span className="lv-sidebar-icon">📈</span> Trending
        </h3>
        <div className="lv-trending-list">
          {trending.map((l, i) => (
            <button
              key={l.id}
              className="lv-trending-item"
              onClick={() => onSelect(l)}
            >
              <span className="lv-trend-rank">{i + 1}</span>
              <div className="lv-trend-info">
                <p className="lv-trend-title">{l.title}</p>
                <span className="lv-trend-views">
                  {formatViews(l.views)} views
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="lv-sidebar-section">
        <h3 className="lv-sidebar-title">✨ Recommended</h3>
        <div className="lv-rec-list">
          {recommended.map((l) => (
            <button
              key={l.id}
              className="lv-rec-card"
              onClick={() => onSelect(l)}
            >
              <div
                className="lv-rec-thumb"
                style={{
                  background: l.thumbnail_url
                    ? "black"
                    : (l.thumbnail_color || "#00d9ff") + "44",
                }}
              >
                {l.thumbnailPreview ? (
                  <img src={l.thumbnailPreview} alt="" className="lv-rec-img" />
                ) : (
                  <span className="lv-rec-icon">▶</span>
                )}
              </div>
              <div className="lv-rec-info">
                <p className="lv-rec-title">{l.title}</p>
                <span className="lv-rec-prof">
                  {l.profiles?.full_name || l.professor || "Professor"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── Main LecturesView Component ──────────────────────────────────────────────
export default function LecturesView() {
  const [lectures, setLectures] = useState([]);
  const [selectedCat, setSelectedCat] = useState("All Lectures");
  const [search, setSearch] = useState("");
  const [activeLecture, setActiveLecture] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  async function loadLectures() {
    setLoading(true);
    const { data } = await fetchPublishedLectures({ sort: sortBy });
    setLectures(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadLectures();
  }, []);
  useEffect(() => {
    if (!activeLecture) loadLectures();
  }, [activeLecture]);

  const categories = ["All Lectures", ...CATEGORIES];

  const filtered = lectures
    .filter((l) => {
      const matchCat =
        selectedCat === "All Lectures" || l.category === selectedCat;
      const matchSearch =
        !search ||
        l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.profiles?.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        l.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.created_at) - new Date(a.created_at);
      if (sortBy === "popular") return (b.views || 0) - (a.views || 0);
      return a.title.localeCompare(b.title);
    });

  const handleSelect = (lecture) => setActiveLecture(lecture);
  const handleClose = () => setActiveLecture(null);

  return (
    <div className="lv-shell">
      {loading && (
        <div className="lv-loading">
          <div className="lv-spinner" />
          <p>Loading lectures…</p>
        </div>
      )}

      {/* Hero Banner */}
      <div className="lv-hero">
        <div className="lv-hero-content">
          <h1 className="lv-hero-title">Lectures by Professors</h1>
          <p className="lv-hero-sub">
            Learn concepts through expert curated video lectures — free to
            watch.
          </p>
        </div>
        <div className="lv-hero-stats">
          <div className="lv-hero-stat">
            <span className="lv-hero-stat-val">{lectures.length}</span>
            <span className="lv-hero-stat-lbl">Lectures</span>
          </div>
          <div className="lv-hero-divider" />
          <div className="lv-hero-stat">
            <span className="lv-hero-stat-val">
              {formatViews(lectures.reduce((s, l) => s + (l.views || 0), 0))}
            </span>
            <span className="lv-hero-stat-lbl">Total Views</span>
          </div>
          <div className="lv-hero-divider" />
          <div className="lv-hero-stat">
            <span className="lv-hero-stat-val">
              {new Set(lectures.map((l) => l.professor_id)).size}
            </span>
            <span className="lv-hero-stat-lbl">Professors</span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="lv-body">
        {/* Category Sidebar */}
        <aside className="lv-cat-sidebar">
          <h3 className="lv-cat-title">Categories</h3>
          <div className="lv-cat-list">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`lv-cat-item ${selectedCat === cat ? "lv-cat-item--active" : ""}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
                <span className="lv-cat-count">
                  {cat === "All Lectures"
                    ? lectures.length
                    : lectures.filter((l) => l.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Grid + Sidebar */}
        <div className="lv-main-area">
          {/* Toolbar */}
          <div className="lv-toolbar">
            {/* <p className="lv-result-count">
              {filtered.length} lecture{filtered.length !== 1 ? "s" : ""} in{" "}
              <strong>{selectedCat}</strong>
            </p> */}
            <div className="lv-search-bar">
              <span className="lv-search-icon">🔍</span>
              <input
                className="lv-search-input"
                placeholder="Search lectures, professors, topics…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="lv-search-clear"
                  onClick={() => setSearch("")}
                >
                  ✕
                </button>
              )}
            </div>
            <select
              className="lv-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="alpha">A → Z</option>
            </select>
          </div>

          <div className="lv-content-row">
            {/* Lecture Cards */}
            <div className="lv-grid-area">
              {filtered.length === 0 ? (
                <div className="lv-no-results">
                  <span className="lv-no-icon">🔍</span>
                  <p>No lectures found. Try a different search or category.</p>
                  <button
                    className="lv-reset-btn"
                    onClick={() => {
                      setSearch("");
                      setSelectedCat("All Lectures");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="lv-grid">
                  {filtered.map((lecture) => (
                    <LectureCard
                      key={lecture.id}
                      lecture={lecture}
                      onClick={() => handleSelect(lecture)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Trending / Recommended Sidebar */}
            {lectures.length > 0 && (
              <TrendingSidebar lectures={lectures} onSelect={handleSelect} />
            )}
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {activeLecture && (
        <VideoModal lecture={activeLecture} onClose={handleClose} />
      )}
    </div>
  );
}
