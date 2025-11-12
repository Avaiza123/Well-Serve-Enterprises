import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-features">
          <div>
            <h4>Reliable</h4>
            <p>All products displayed are verified and of high quality with 100% satisfaction.</p>
          </div>
          <div>
            <h4>Secure</h4>
            <p>SSL 128-bit encryption and Payment Card Industry Data Security Standard compliant.</p>
          </div>
          <div>
            <h4>Affordable</h4>
            <p>Find affordable surgical items.</p>
          </div>
        </div>

        <div className="footer-delivery">
          <h4>DELIVER TO YOUR DOORSTEP</h4>
          <p>All over Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="company-info">
          <h4>ABOUT OUR COMPANY</h4>
          <ul>
            <li>Get In Touch: +92 334 5341125</li>
          </ul>
        </div>

        <div className="social-media">
          <h4>FOLLOW US ON SOCIAL MEDIA</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61578005495902"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <>                                       </>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © 2025-{new Date().getFullYear()} Well Serve Enterprises
      </p>

      {/* 
      <div className="footer-policies">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Return Policy</span>
        <span>Group Companies</span>
      </div>
      */}
    </footer>
  );
};

export default Footer;
