import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// ✅ Import all images
import UNextLogo from '../../images/icons/unextlogo.png';
import WhatsAppIcon from '../../images/icons/whatsapp.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`myheader-header-wrapper ${showHeader ? '' : 'myheader-hidden'}`}>
      <div className={`myheader-container ${showHeader ? 'myheader-scroll-up' : ''}`}>
        {/* Logo */}
        <div className="myheader-logo">
          <img src={UNextLogo} alt="uNext Logo" />
        </div>

        {/* Navigation + CTA */}
        <div className={`myheader-left-side ${menuOpen ? 'myheader-mobile-open' : ''}`}>
          <nav className="myheader-nav-links">
            <Link
              to="/"
              onClick={handleNavClick}
              className={location.pathname === '/' ? 'myheader-active-link' : ''}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={location.pathname === '/about' ? 'myheader-active-link' : ''}
            >
              About us
            </Link>
            <Link
              to="/services"
              onClick={handleNavClick}
              className={location.pathname === '/services' ? 'myheader-active-link' : ''}
            >
              Our services
            </Link>
            <Link
              to="/pricing"
              onClick={handleNavClick}
              className={location.pathname === '/pricing' ? 'myheader-active-link' : ''}
            >
              Pricing
            </Link>
          </nav>

          <div className="myheader-cta-button myheader-desktop-only">
            <a
              href="https://wa.me/233209735525?text=Hello%20Unext%2C%20I%27m%20interested%20in%20your%20services."
              rel="noopener noreferrer"
              target="_blank"
            >
              Let's talk
              <img src={WhatsAppIcon} alt="WhatsApp Icon" className="myheader-cta-icon" />
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="myheader-mobile-controls">
          <a
            href="https://wa.me/233209735525?text=Hello%20Unext%2C%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="myheader-mobile-call-icon"
          >
            <img src={WhatsAppIcon} alt="WhatsApp Icon" />
          </a>
          <div className={`myheader-hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
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
