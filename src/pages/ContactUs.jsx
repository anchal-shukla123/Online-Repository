import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const mailtoLink = `mailto:anchal6704@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact Form Submission"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 500);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </section>

        {/* Main Contact Section */}
        <div className="contact-main">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send Us a Message</h2>
            <p className="form-description">
              Fill out the form below and it will open in your email client.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information - Combined Block */}
          <section className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="info-description">
              Reach out to us directly via email
            </p>

            {/* Single Contact Card */}
            <div className="single-contact-card">
              <div className="contact-types">
                <div className="contact-type-item">
                  <div className="type-icon">✉️</div>
                  <span className="type-label">General Inquiries</span>
                </div>
                <div className="contact-type-item">
                  <div className="type-icon">🛠️</div>
                  <span className="type-label">Technical Support</span>
                </div>
                <div className="contact-type-item">
                  <div className="type-icon">💼</div>
                  <span className="type-label">Business & Partnerships</span>
                </div>
              </div>
              
              <div className="email-section">
                <p className="email-label">Email us at:</p>
                <a href="mailto:sahilburde66@gmail.com" className="main-email-link">
                  anchal6704@gmail.com
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="faq-section">
              <h3>Quick Help</h3>
              <ul className="faq-list">
                <li>
                  <span className="faq-icon">❓</span>
                  <div>
                    <strong>How do I run my code?</strong>
                    <p>
                      Write or paste your code in the editor and click the "Run
                      Code" button.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="faq-icon">❓</span>
                  <div>
                    <strong>Which languages are supported?</strong>
                    <p>
                      We support JavaScript, TypeScript, Python, Java, C#, and
                      PHP.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="faq-icon">❓</span>
                  <div>
                    <strong>Is CodeCompiler free?</strong>
                    <p>Yes, all core features are completely free to use.</p>
                  </div>
                </li>
                <li>
                  <span className="faq-icon">❓</span>
                  <div>
                    <strong>Can I save my code?</strong>
                    <p>
                      Your code remains in the editor during your session. We
                      recommend copying important code locally.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {/* <a href="" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                  Twitter
                </a> */}
                <a href="https://github.com/anchal-shukla123/" className="social-link" aria-label="GitHub">
                  <span className="social-icon">💻</span>
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Response Time Notice */}
        <section className="response-notice">
          <div className="notice-content">
            <span className="notice-icon">⏱️</span>
            <div>
              <h3>Expected Response Time</h3>
              <p>
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical issues, please include
                "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;