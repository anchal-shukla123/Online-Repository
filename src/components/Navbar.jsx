import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar Component
 * Top navigation bar with routing links
 */
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-custom">
      <div className="container-fluid px-4">
        <div className="navbar-content">
          {/* Logo/Brand */}
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">{'</>'}</span>
            <span className="brand-text">CodeRunner</span>
          </Link>

          {/* Navigation Links */}
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <span className="link-text">Home</span>
              <span className="link-underline"></span>
            </Link>
            <Link 
              to="/compiler" 
              className={`nav-link ${location.pathname === '/compiler' ? 'active' : ''}`}
            >
              <span className="link-text">Compiler</span>
              <span className="link-underline"></span>
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              <span className="link-text">About</span>
              <span className="link-underline"></span>
            </Link>

            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              <span className="link-text">Contact Us</span>
              <span className="link-underline"></span>
            </Link>

            <Link 
              to="/privacy-policy" 
              className={`nav-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`}
            >
              <span className="link-text">Privacy Policy</span>
              <span className="link-underline"></span>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;