import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "../lib/supabase";
import "./Navbar.css";

/**
 * Navbar Component
 *
 * Responsive top navigation bar with:
 * - Logo/Brand
 * - Navigation links (Home, Compiler, Lectures, Blog, About)
 * - Dynamic auth state:
 *   - Not logged in → "Login" button
 *   - Logged in as Student → Avatar with sign-out
 *   - Logged in as Professor → "Dashboard" button + Avatar
 *
 * Uses useAuth() hook to access current user and profile.
 */
const Navbar = () => {
  const location = useLocation();
  const { user, profile, isProfessor } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const closeTimeout = useRef(null);

  const handleEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setShowLogout(true);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setShowLogout(false);
    }, 150); // small delay
  };

  // Generate user initials from full name (e.g., "Sarah Johnson" → "SJ")
  const initials = profile?.full_name
    ? profile.full_name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  // Handle sign out — redirects to /auth after successful logout
  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/auth";
  };

  return (
    <nav className="navbar-custom">
      <div className="container-fluid px-4">
        <div className="navbar-content">
          {/* ──── Logo / Brand ──────────────────────────────── */}
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">{"</>"}</span>
            <span className="brand-text">CodeRunner</span>
          </Link>

          {/* ──── Navigation Links ──────────────────────────── */}
          <div className="navbar-links">
            {/* Home */}
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              <span className="link-text">Home</span>
              <span className="link-underline"></span>
            </Link>

            {/* Compiler */}
            <Link
              to="/compiler"
              className={`nav-link ${location.pathname === "/compiler" ? "active" : ""}`}
            >
              <span className="link-text">Compiler</span>
              <span className="link-underline"></span>
            </Link>

            {/* Lectures */}
            <Link
              to="/lectures"
              className={`nav-link ${location.pathname === "/lectures" ? "active" : ""}`}
            >
              <span className="link-text">Lectures</span>
              <span className="link-underline"></span>
            </Link>

            {/* Blog */}
            <Link
              to="/blog"
              className={`nav-link ${location.pathname.startsWith("/blog") ? "active" : ""}`}
            >
              <span className="link-text">Blog</span>
              <span className="link-underline"></span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            >
              <span className="link-text">About</span>
              <span className="link-underline"></span>
            </Link>

            {/* ──── Auth-Dependent Section ──────────────────── */}
            {user ? (
              // USER IS LOGGED IN
              <>
                {/* Professor-only: Dashboard link */}
                {isProfessor && (
                  <Link to="/admin" className="nav-link nav-link--cta">
                    <span className="link-text">Admin</span>
                  </Link>
                )}
                {/* <div
                  className="nav-avatar-wrapper"
                  onMouseEnter={() => setShowLogout(true)}
                  onMouseLeave={() => setShowLogout(false)}
                >
                  <button className="nav-avatar-btn">{initials}</button>

                  <div
                    className={`logout-dropdown ${showLogout ? "open" : ""}`}
                  >
                    <button
                      className="ap-switch-btn ap-switch-btn--danger"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div> */}
                <div
                  className="nav-avatar-wrapper"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <button className="nav-avatar-btn">{initials}</button>

                  <div
                    className={`logout-dropdown ${showLogout ? "open" : ""}`}
                  >
                    <button
                      className="ap-switch-btn ap-switch-btn--danger"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // USER IS NOT LOGGED IN
              <Link to="/auth" className="nav-link nav-link--cta">
                <span className="link-text">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
