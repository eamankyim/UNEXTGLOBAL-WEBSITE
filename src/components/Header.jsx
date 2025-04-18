import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-wrapper">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="images/icons/unextlogo.png" alt="uNext Logo" />
        </div>

        {/* Navigation + CTA */}
        <div className={`left-side ${menuOpen ? 'mobile-open' : ''}`}>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Consulting</a>
            <a href="#">Solutions</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <div className="cta-button desktop-only">
            <a
              href="https://wa.me/233555155972?text=Hi%20Unext%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's talk
              <img
                src="images/icons/whatsapp.svg"
                alt="WhatsApp Icon"
                className="cta-icon"
              />
            </a>
          </div>
          </div>

          {/* Mobile Controls: WhatsApp Icon + Hamburger */}
          <div className="mobile-controls">
            <a
              href="https://wa.me/233555155972?text=Hi%20Unext%2C%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-call-icon"
            >
              <img src="images/icons/whatsapp.svg" alt="WhatsApp Icon" />
            </a>
            <div
              className={`hamburger ${menuOpen ? 'open' : ''}`}
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
