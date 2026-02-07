import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h3 className="footer-logo">CodeRunner</h3>
          <p className="footer-desc">
            An online code compiler to write, compile and run code instantly
            using modern web technologies.
          </p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CodeRunner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
