import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import { PiButterflyFill } from 'react-icons/pi'; // Optional unique icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-partner-section">
        <p className="footer-acknowledgement">
        Adelaide Fringe recognises Kaurna Miyurna Yarta (Adelaide Plains people’s Land) and all First Nations people and their ancestral lands and waterways on which Fringe lives, operates and learns. The lands were never ceded and remain as important to the living Kaurna people today. We pay respect to the Kaurna people and their Elders past and present.
        </p>
        <div className="footer-divider"></div>
        <div className="footer-logos"></div>
          <a href='https://adelaidefringe.com.au/as-a-partner/#thank-you-to-our-partners'><img src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250528.1/assets/partners/2025-partner-logos-cf65de2a.png" alt="Desktop" /></a></div>
      <div className="footer-divider"></div>
      <div className="footer-links-section">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href='https://adelaidefringe.com.au/about-us'>About Adelaide Fringe</a></li>
            <li><a href='https://adelaidefringe.com.au/accessibility-at-fringe'>Accessibility</a></li>
            <li><a href='https://adelaidefringe.com.au/join-fringe-team'>Join Our Team</a></li>
            <li><a href='https://adelaidefringe.com.au/get-involved'>Get Involved</a></li>
            <li><a href='https://adelaidefringe.com.au/contact/new'>Contact Us</a></li>
            <li><a href='https://adelaidefringe.com.au/fringefeed'>News</a></li>
            <li><a href='https://adelaidefringe.com.au/faq'>FAQs</a></li>
          </ul>
        </div>

        <div className="footer-social-app">
          <div className="footer-social">
            <a href='https://instagram.com/adlfringe/'><FaInstagram /></a>
            <a href='https://www.facebook.com/ADLfringe'><FaFacebookF /></a>
            <a href='https://www.linkedin.com/company/adelaide-fringe'><FaLinkedinIn /></a>
            <a href='https://bsky.app/profile/adlfrin.ge'><PiButterflyFill /></a>
            <a href='https://www.youtube.com/user/adelaidefringeinc'><FaYoutube /></a>
            <a href='https://www.tiktok.com/@adlfringe'><FaTiktok /></a>
          </div>

          <div className="app-download-box">
            <p>Download the App!</p>
            <p className="app-description">Your pocket guide to Fringe: Plan, Discover, and Stay Notified.</p>
            <div className="app-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg" alt="App Store" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Adelaide Fringe 2025 | Terms, Conditions & Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
