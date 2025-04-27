import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksModal.css';

// Steps Data for Scale Plan
const scaleSteps = [
  {
    title: 'Growth Strategy & Planning',
    subtitle: 'Strategizing for large-scale growth.',
    description: 'Focused consultations on strategic growth, optimizing operations for scale, and leveraging automation.',
    icon: '/images/icons/scale-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Brand Strengthening',
    subtitle: 'Strengthening your brand for maximum impact.',
    description: 'Brand refinement and repositioning to target larger markets and engage new audiences effectively.',
    icon: '/images/icons/scale-icon2.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Advanced Launch Assets',
    subtitle: 'Providing resources for impactful launches.',
    description: 'Custom launch kits, advanced promotional materials, and optimized email marketing automation.',
    icon: '/images/icons/scale-icon3.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Comprehensive Digital Strategy',
    subtitle: 'Expanding your digital presence with purpose.',
    description: 'Advanced social media campaigns, content marketing, and SEO to increase visibility and lead generation.',
    icon: '/images/icons/scale-icon4.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Premium Ongoing Support & Analysis',
    subtitle: 'Continuous support and detailed performance analysis.',
    description: 'Full social media management, marketing performance tracking, and priority support for scaling businesses.',
    icon: '/images/icons/scale-icon5.svg',
    iconClass: 'styled-icon',
  },
];

const HowItWorksModalScale = () => {
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
    if (currentStep < scaleSteps.length - 1) {
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
          <h2 className="modal-title">How it works – Scale Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src="/images/icons/cancel-circle.svg" alt="Close" />
          </button>
        </div>

        {/* Stepper with clickable numbers */}
        <div className="stepper">
          {scaleSteps.map((_, index) => (
            <div key={index} className="step-wrapper">
              <div
                className={`step-circle ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </div>
              {index !== scaleSteps.length - 1 && <div className="step-line"></div>}
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
                  src={scaleSteps[currentStep].icon}
                  alt="Step Icon"
                  className={`step-icon ${scaleSteps[currentStep].iconClass || ''}`}
                />
                <div className="step-titles">
                  <h3>{scaleSteps[currentStep].title}</h3>
                  <h4>{scaleSteps[currentStep].subtitle}</h4>
                </div>
              </div>

              {/* Description */}
              <p>{scaleSteps[currentStep].description}</p>
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
          {currentStep !== scaleSteps.length - 1 && (
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

export default HowItWorksModalScale;
