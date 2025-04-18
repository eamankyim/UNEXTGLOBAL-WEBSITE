import React from 'react';
import './FooterSection.css'; // Importing the CSS file

const FooterSection = () => {
  return (
    <footer className="footer-section" data-aos="fade-up">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-about">
              <h4>About us</h4>
              <p>
                Unext is an innovative e-commerce platform dedicated to empowering businesses
                through trust and technology. Our mission is to provide a secure, scalable,
                and user-friendly environment where your business can thrive.
              </p>
            </div>
            <div className="footer-subscribe">
              <label htmlFor="email">Email</label>
              <div className="subscribe-input">
                <input type="email" id="email" placeholder="example@mail.com" />
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-middle">
            <div className="footer-brand">
              <img src="images/icons/unex-logo.svg" alt="uNext logo" className="logo" />
            </div>
            <div className="footer-socials">
              <h5>Connect with us</h5>
              <div className="social-icons">
                <a href="#">
                  <i className="icon-facebook">
                    <img src="images/icons/facebook-02.png" alt="Facebook icon" />
                  </i>
                </a>
                <a href="#">
                  <i className="icon-linkedin">
                    <img src="images/icons/linkedin-01.png" alt="LinkedIn icon" />
                  </i>
                </a>
                <a href="#">
                  <i className="icon-youtube">
                    <img src="images/icons/youtube.png" alt="YouTube icon" />
                  </i>
                </a>
                <span>@unextglobal</span>
              </div>
            </div>
            <div className="footer-links">
              <h5>Quick links</h5>
              <nav>
                <a href="#">Home</a> |
                <a href="#">Solutions</a> |
                <a href="#">Products</a> |
                <a href="#">About</a> |
                <a href="#">Contact us</a>
              </nav>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <p>&copy; 2024 uNext, All rights reserved</p>
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
