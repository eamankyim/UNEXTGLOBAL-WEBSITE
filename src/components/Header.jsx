import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="myheader-header-wrapper">
      <div className="myheader-container">
        {/* Logo */}
        <div className="myheader-logo">
          <img src="images/icons/unextlogo.png" alt="uNext Logo" />
        </div>

        {/* Navigation + CTA */}
        <div className={`myheader-left-side ${menuOpen ? 'myheader-mobile-open' : ''}`}>
          <nav className="myheader-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Our services</Link>
          </nav>

          <div className="myheader-cta-button myheader-desktop-only">
            <a
              href="https://wa.me/233555155972?text=Hi%20Unext%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's talk
              <img
                src="images/icons/whatsapp.svg"
                alt="WhatsApp Icon"
                className="myheader-cta-icon"
              />
            </a>
          </div>
        </div>

        {/* Mobile Controls: WhatsApp Icon + Hamburger */}
        <div className="myheader-mobile-controls">
          <a
            href="https://wa.me/233555155972?text=Hi%20Unext%2C%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="myheader-mobile-call-icon"
          >
            <img src="images/icons/whatsapp.svg" alt="WhatsApp Icon" />
          </a>
          <div
            className={`myheader-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
