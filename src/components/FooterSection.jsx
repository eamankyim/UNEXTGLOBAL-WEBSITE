import React from 'react';
import { Link } from 'react-router-dom';
import './FooterSection.css';

import logo from '../../images/icons/unex-logo.svg';
import facebookIcon from '../../images/icons/facebook-02.png';
import linkedinIcon from '../../images/icons/linkedin-01.png';
import InstagramIcon from '../../images/icons/instagram.svg';
import youtubeIcon from '../../images/icons/youtube.png';

const FooterSection = () => {
  return (
    <footer className="footer-section" data-aos="fade-up">
      <div className="footer-wrapper">
        <div className="footer-container">
          {/* Top section */}
          <div className="footer-top">
            <h4>About us</h4>
            <p>
              Unext is an innovative business solutions provider dedicated to empowering businesses
              through trust and technology. Our mission is to provide a secure, scalable,
              and user-friendly environment where your business can thrive.
            </p>
          </div>

          <hr />

          {/* Middle section */}
          <div className="footer-middle">
            {/* Brand logo */}
            <div className="footer-brand">
              <img src={logo} alt="uNext logo" className="logo" />
            </div>

            {/* Socials */}
            <div className="footer-socials">
              <h5>Connect with us</h5>
              <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=61576159554465" target="_blank" rel="noopener noreferrer">
                  <i className="icon-facebook">
                    <img src={facebookIcon} alt="Facebook" />
                  </i>
                </a>
                <a href="https://www.linkedin.com/company/107301004" target="_blank" rel="noopener noreferrer">
                  <i className="icon-linkedin">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </i>
                </a>
                <a href="https://www.instagram.com/unext.global" target="_blank" rel="noopener noreferrer">
                  <i className="icon-instagram">
                    <img src={InstagramIcon} alt="Instagram" />
                  </i>
                </a>
                <span>UNEXT Global</span>
              </div>
             
            </div>

            {/* Quick links */}
            <div className="footer-links">
              <h5>Quick links</h5>
              <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/about">About</Link> |{' '}
                <Link to="/services">Services</Link> |{' '}
                <Link to="/pricing">Pricing</Link> |{' '}
                <a href="https://wa.me/233209735525?text=Hello%20Unext%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                  Contact us
                </a>
              </nav>
            </div>
          </div>

          <hr />

          {/* Bottom section */}
          <div className="footer-bottom">
            <p>&copy; 2025 UNEXT, All rights reserved</p>
            <div className="footer-policy">
  <Link to="/legalPage#terms">Legal information</Link>
 
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
