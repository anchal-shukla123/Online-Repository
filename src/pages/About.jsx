import React from 'react';
import './About.css';

/**
 * About Page Component
 * Information about the project and technology stack
 */
const About = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        <div className="about-content fade-in">
          {/* Header */}
          <div className="about-header">
            <h1 className="about-title">
              About <span className="gradient-text">CodeRunner</span>
            </h1>
            <p className="about-subtitle">
              A modern, frontend-only online compiler powered by React and Judge0
            </p>
          </div>

          {/* Main Content */}
          <div className="about-sections">
            {/* What is CodeRunner */}
            <section className="about-section slide-in-left">
              <h2 className="section-heading">What is CodeRunner?</h2>
              <p className="section-text">
                CodeRunner is a powerful online compiler that allows you to write, compile, and execute
                code in multiple programming languages directly in your browser. Built entirely on the
                frontend using React, it demonstrates how modern web technologies can create sophisticated
                applications without requiring a traditional backend server. It uses the free and open-source
                Piston API for code execution.
              </p>
            </section>

            {/* Technology Stack */}
            <section className="about-section slide-in-right">
              <h2 className="section-heading">Technology Stack</h2>
              <div className="tech-grid">
                <div className="tech-item">
                  <div className="tech-icon">⚛️</div>
                  <h3 className="tech-name">React 18</h3>
                  <p className="tech-description">Modern UI with hooks and functional components</p>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">⚡</div>
                  <h3 className="tech-name">Vite</h3>
                  <p className="tech-description">Lightning-fast build tool and dev server</p>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🎨</div>
                  <h3 className="tech-name">Bootstrap 5</h3>
                  <p className="tech-description">Responsive grid system and utilities</p>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">📝</div>
                  <h3 className="tech-name">Monaco Editor</h3>
                  <p className="tech-description">VS Code-powered code editor</p>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🔌</div>
                  <h3 className="tech-name">Piston API</h3>
                  <p className="tech-description">Free code execution service</p>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🌐</div>
                  <h3 className="tech-name">Axios</h3>
                  <p className="tech-description">HTTP client for API requests</p>
                </div>
              </div>
            </section>

            {/* Supported Languages */}
            <section className="about-section slide-in-left">
              <h2 className="section-heading">Supported Languages</h2>
              <div className="language-list">
                <div className="language-item">
                  <span className="language-badge">Python</span>
                  <span className="language-version">3.10.0</span>
                </div>
                <div className="language-item">
                  <span className="language-badge">C</span>
                  <span className="language-version">GCC 10.2.0</span>
                </div>
                <div className="language-item">
                  <span className="language-badge">C++</span>
                  <span className="language-version">GCC 10.2.0</span>
                </div>
                <div className="language-item">
                  <span className="language-badge">Java</span>
                  <span className="language-version">JDK 15.0.2</span>
                </div>
                <div className="language-item">
                  <span className="language-badge">JavaScript</span>
                  <span className="language-version">Node.js 18.15.0</span>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="about-section slide-in-right">
              <h2 className="section-heading">Key Features</h2>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  Real-time syntax highlighting and code completion
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  Support for standard input (stdin) for interactive programs
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  Comprehensive error handling and display
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  Execution time and memory usage statistics
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  Fully responsive design for all devices
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">✓</span>
                  No backend server required - runs entirely in browser
                </li>
              </ul>
            </section>

            {/* How it Works */}
            <section className="about-section slide-in-left">
              <h2 className="section-heading">How It Works</h2>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3 className="step-title">Write Code</h3>
                    <p className="step-description">
                      Use the Monaco editor to write your code with syntax highlighting
                    </p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3 className="step-title">Submit to Piston</h3>
                    <p className="step-description">
                      Code is sent to Piston API for instant compilation and execution
                    </p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3 className="step-title">Instant Results</h3>
                    <p className="step-description">
                      Piston executes immediately and returns results in one response
                    </p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3 className="step-title">Display Output</h3>
                    <p className="step-description">
                      Results and errors are displayed instantly in the console
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitations */}
            <section className="about-section slide-in-right">
              <h2 className="section-heading">Limitations</h2>
              <div className="limitations-box">
                <p className="limitation-item">
                  <strong>Free & Open Source:</strong> Piston API is completely free with no API key required! 
                  Learn more at <a href="https://github.com/engineer-man/piston" 
                  target="_blank" rel="noopener noreferrer" className="link-cyan">GitHub</a>
                </p>
                <p className="limitation-item">
                  <strong>Execution Time:</strong> Limited to a few seconds per execution for safety.
                </p>
                <p className="limitation-item">
                  <strong>No File I/O:</strong> File operations are not supported in this environment.
                </p>
                <p className="limitation-item">
                  <strong>Network Disabled:</strong> Programs cannot make external network requests.
                </p>
              </div>
            </section>

            {/* Footer */}
            <section className="about-footer">
              <p className="footer-text">
                Built with ❤️ using React, Vite, and Piston API
              </p>
              <p className="footer-text">
                For educational purposes and demonstration of frontend capabilities
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;