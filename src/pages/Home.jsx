import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Adsense from '../components/Adsense';
/**
 * Home Page Component
 * Landing page with hero section and feature highlights
 */
const Home = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Execute code in milliseconds with our optimized Judge0 API integration',
    },
    {
      icon: '🌐',
      title: 'Multiple Languages',
      description: 'Support for Python, C, C++, Java, and JavaScript out of the box',
    },
    {
      icon: '🎨',
      title: 'Monaco Editor',
      description: 'VS Code-powered editor with syntax highlighting and IntelliSense',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works seamlessly across all devices and screen sizes',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">Frontend-Only Compiler</span>
            </div>
            
            <h1 className="hero-title">
              Compile & Run Code
              <br />
              <span className="gradient-text">Anywhere, Anytime</span>
            </h1>
            
            <p className="hero-description">
              A powerful online compiler built with React and Piston API.
              Write, compile, and execute code in multiple programming languages
              directly in your browser. No backend, no API key required - completely free!
            </p>
            
            <div className="hero-actions">
              <Link to="/compiler" className="btn-primary">
                <span className="btn-text">Start Coding</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/about" className="btn-secondary">
                <span className="btn-text">Learn More</span>
              </Link>
            </div>

            {/* Language Tags */}
            <div className="language-tags">
              {['Python', 'C', 'C++', 'Java', 'JavaScript'].map((lang, index) => (
                <span 
                  key={lang} 
                  className="language-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="hero-bg">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
      </section>
      {/* Ad after Hero */}
      <div className="container">
        <Adsense slot="8351730639" />
      </div>
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">CodeRunner</span>?
          </h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ad after Features */}
      <div className="container">
        <Adsense slot="8351730639" />
      </div>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Coding?</h2>
            <p className="cta-description">
              Jump into our compiler and start writing code in seconds
            </p>
            <Link to="/compiler" className="btn-primary btn-large">
              <span className="btn-text">Open Compiler</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;