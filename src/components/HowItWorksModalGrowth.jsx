import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion'; // ✨ Import framer motion
import { FaTimes } from 'react-icons/fa';

import './HowItWorksModal.css';

const HowItWorksModalGrowth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const modalContent = (
    <div className="howitworks-overlay">
      <motion.div
        className="howitworks-card"
        initial={{ opacity: 0, scale: 0.8 }}  // 👈 Fade and scale from smaller
        animate={{ opacity: 1, scale: 1 }}    // 👈 Full size
        exit={{ opacity: 0, scale: 0.8 }}      // 👈 Shrink and fade on close
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button className="close-button" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className="howitworks-content">
          <h2>How It Works</h2>
          <p>
            Here you can explain in simple steps how your pricing plans or services work.
          </p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <button className="btn-outline" onClick={openModal}>
        How it works
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && modalContent}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default HowItWorksModalGrowth;
