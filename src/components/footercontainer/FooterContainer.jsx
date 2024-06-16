import React from 'react';
import './footercontainer.css'; // Make sure to create a Footer.css file for styling

        
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMailBulk, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <img src="/path/to/logo.png" alt="Campus Kite" className="footer-logo" />
          <h2>Your Social Media</h2>
          <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebookF className="social-icon" /> </a>
          <a href="https://www.instagram.com"><FaInstagram className="social-icon" /> </a>
          <a href="https://www.twitter.com"><FaTwitter className="social-icon" /> </a>
          <a href="https://www.linkedin.com"><FaLinkedinIn className="social-icon" /> </a>
          <a href="https://www.youtube.com"><FaYoutube className="social-icon" /> </a>
          <a href="https://www.mail.com"><FaMailBulk className="social-icon" /> </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-section">
            <h3>Privacy Policy</h3>
            <p>Terms and Conditions</p>
            <p>Pricing and Refund</p>
            <p>Shipping and delivery</p>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Hire from us</p>
            <p>Free Courses</p>
            <p>Community</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>+91-8888888888</p>
            <p>campuskite@email.com</p>
            <p>A-101 RISE, CDC, Location, Delhi (123456)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
