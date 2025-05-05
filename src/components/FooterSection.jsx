import React from 'react';
import './FooterSection.css';

import logo from '../../images/icons/unex-logo.svg';
import facebookIcon from '../../images/icons/facebook-02.png';
import linkedinIcon from '../../images/icons/linkedin-01.png';
import youtubeIcon from '../../images/icons/youtube.png';

const FooterSection = () => {
  return (
    <footer className="footer-section" data-aos="fade-up">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-top">
        
              <h4>About us</h4>
              <p>
                Unext is an innovative business solutions provider dedicated to empowering businesses
                through trust and technology. Our mission is to provide a secure, scalable,
                and user-friendly environment where your business can thrive.
              </p>
         
           
          </div>

          <hr />

          <div className="footer-middle">
            <div className="footer-brand">
              <img src={logo} alt="uNext logo" className="logo" />
            </div>
            <div className="footer-socials">
              <h5>Connect with us</h5>
              <div className="social-icons">
                <a href="#">
                  <i className="icon-facebook">
                    <img src={facebookIcon} alt="Facebook icon" />
                  </i>
                </a>
                <a href="#">
                  <i className="icon-linkedin">
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                  </i>
                </a>
                <a href="#">
                  <i className="icon-youtube">
                    <img src={youtubeIcon} alt="YouTube icon" />
                  </i>
                </a>
                <span>@unextglobal</span>
              </div>
            </div>
            <div className="footer-links">
              <h5>Quick links</h5>
              <nav>
                <a  href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/services">Solutions</a> |
                <a href="/pricing">Pricing</a> |
                <a  href="https://wa.me/233536787174?text=Hello%20Unext%2C%20I%27m%20interested%20in%20your%20services.">Contact us</a>
              </nav>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <p>&copy; 2025 UNext, All rights reserved</p>
            <div className="footer-policy">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


