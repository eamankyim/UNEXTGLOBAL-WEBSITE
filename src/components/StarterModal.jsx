import React, { useState, useEffect } from 'react';
import './StarterModal.css';

const StarterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Add/remove the 'modal-open' class to body when modal state changes
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Clean up the class when the component unmounts or modal closes
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  return (
    <>
      <button className="starter-modal-open-btn" onClick={openModal}>
        How it works
      </button>

      {isOpen && (
        <div className="starter-modal-overlay">
          <div className="starter-modal-content">
            <button className="starter-modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>How it Works - Starter Plan</h2>
            <p>We believe in growing with you. Our process starts by deeply understanding your business, goals, and audience.</p>
            <p>From there, we design a brand guide that gives your business a clear, cohesive identity. Once this foundation is set, your monthly support begins to build your brand’s presence and growth sustainably.</p>
            <br />
            <h3>Starter Package Breakdown:</h3>
            <ul>
              <li><strong>Brand Discovery Session:</strong> We get to know your business DNA, your mission, audience, and vision to design with intention.</li>
              <li><strong>Logo Design + Brand Manual:</strong> We craft a professional logo and a brand manual to ensure consistency across all touchpoints.</li>
              <li><strong>Social Media Starter Kit:</strong> Essential templates and designs to immediately make your social presence feel professional and aligned.</li>
              <li><strong>Business Card + Letterhead + Flyers:</strong> Basic but critical print assets that make you look polished and trustworthy.</li>
              <li><strong>Company Email Setup + Signature:</strong> Set up professional communication systems to build client trust.</li>
              <li><strong>Brand Strategy & Positioning Basics:</strong> Strategic foundation to position your brand strongly in your market.</li>
              <li><strong>Free Templates:</strong> Handy templates (like invoices, proposals) to make your operations smoother from Day 1.</li>
              <li><strong>Social Media Account Setup:</strong> If needed, we help you properly set up key social media profiles the right way.</li>
              <br />
              <h3>Ongoing Monthly Support:</h3>
              <li><strong>5 Social Media Posts/Month:</strong> Regular presence keeps your brand alive and growing.</li>
              <li><strong>Branding Add-ons:</strong> Small tweaks and extensions to keep evolving your materials as needed.</li>
              <li><strong>Social Media Management (Light Support):</strong> Monitoring and basic management to maintain activity and professionalism.</li>
              <li><strong>Priority Email Support:</strong> Direct line to our team for fast help.</li>
              <li><strong>Business Guidance:</strong> We offer advice and insights as your business evolves to the next level.</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default StarterModal;
