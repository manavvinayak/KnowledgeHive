import React from "react";
import "./Footer.css"; // Link to the CSS file
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Address */}
        <div className="footer-section contact-info">
          <img src="/logoi.png" alt="Logo" className="footer-logo" />
          <p>
            📍 Faridabad, Haryana
          </p>
          <p>✉vinndevelop99@gmail.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Center Sections */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Learn</h3>
          <ul>
            <li><a href="#">Algorithms</a></li>
            <li><a href="#">Data Structures</a></li>
            <li><a href="#">Languages</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Video Tutorials</a></li>
          </ul>
        </div>

        

        <div className="footer-section">
          <h3>Contribute</h3>
          <ul>
            <li><a href="#">Write an Article</a></li>
            <li><a href="#">Write Interview Experience</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
