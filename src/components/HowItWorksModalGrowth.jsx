import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksModal.css';

// Steps Data for Growth Plan
const growthSteps = [
  {
    title: 'Advanced Strategy & Consultation',
    subtitle: 'Tailored strategies for scaling.',
    description: 'A deep dive into scaling your business, targeting growth opportunities, and refining your core operations.',
    icon: '/images/icons/growth-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Brand Evolution',
    subtitle: 'Refining your identity for greater impact.',
    description: 'We evolve your brand to speak to a larger audience while staying true to your core values.',
    icon: '/images/icons/growth-icon2.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Enhanced Launch Assets',
    subtitle: 'Taking your launch to the next level.',
    description: 'Advanced Social Media Kit. Custom Business Materials. Pro Email Configuration and Automation.',
    icon: '/images/icons/growth-icon3.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Comprehensive Digital Presence',
    subtitle: 'Maximizing your online visibility.',
    description: 'Strategic social media campaigns. Website optimization and content marketing setup.',
    icon: '/images/icons/growth-icon4.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Premium Ongoing Support',
    subtitle: 'Dedicated support for sustained growth.',
    description: 'Social Media Management (Full). Priority Phone & Email Support. Marketing Strategy Consulting.',
    icon: '/images/icons/growth-icon5.svg',
    iconClass: 'styled-icon',
  },
];

const HowItWorksModalGrowth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleNext = () => {
    if (currentStep < growthSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      closeModal();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const modalContent = (
    <div className="howitworks-overlay">
      <motion.div
        className="howitworks-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Close Button at the Top Right */}
        <div className="howitworks-topbar">
          <h2 className="modal-title">How it works – Growth Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src="/images/icons/cancel-circle.svg" alt="Close" />
          </button>
        </div>

        {/* Stepper with clickable numbers */}
        <div className="stepper">
          {growthSteps.map((_, index) => (
            <div key={index} className="step-wrapper">
              <div
                className={`step-circle ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </div>
              {index !== growthSteps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="step-content"
          >
            <div className="step-card">
              {/* Title and Icon */}
              <div className="step-heading">
                <img
                  src={growthSteps[currentStep].icon}
                  alt="Step Icon"
                  className={`step-icon ${growthSteps[currentStep].iconClass || ''}`}
                />
                <div className="step-titles">
                  <h3>{growthSteps[currentStep].title}</h3>
                  <h4>{growthSteps[currentStep].subtitle}</h4>
                </div>
              </div>

              {/* Description */}
              <p>{growthSteps[currentStep].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="step-buttons">
          {currentStep !== 0 && (
            <button className="prev-btn" onClick={handlePrev}>
              <img src="/images/icons/left-circle.svg" alt="Previous" />
            </button>
          )}
          {currentStep !== growthSteps.length - 1 && (
            <button className="next-btn" onClick={handleNext}>
              <img src="/images/icons/right-circle.svg" alt="Next" />
            </button>
          )}
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
