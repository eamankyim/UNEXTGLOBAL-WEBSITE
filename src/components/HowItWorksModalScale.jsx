import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksModal.css';

import icon1 from '../../images/icons/starter-icon1.svg';
import closeIcon from '../../images/icons/cancel-circle.svg';
import leftArrow from '../../images/icons/left-circle.svg';
import rightArrow from '../../images/icons/right-circle.svg';

const steps = [
  {
    title: 'Step 1: Let’s Kick Things Off',
    subtitle: 'Just drop your name, email, and phone number.',
    description: `That’s all it takes to begin. Our team will reach out quickly to schedule your discovery call — at your convenience — to dive into your business and goals.`,
    icon: icon1,
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 2: Strategy Begins With You',
    subtitle: 'We talk, listen, and understand — in depth.',
    description: `In your discovery session, we’ll explore your current business state, brand perception, customer journey, and where you want to scale next.<br><br>From content gaps to automation potential, we assess it all.`,
    icon: icon1,
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 3: Strategic Foundation, Systems & Tools',
    subtitle: 'Everything in Growth — and then some.',
    description: `
      This step sets the tone for serious business growth, with structure and precision.<br><br>
      <strong>Included from Starter + Growth:</strong><br>
      ✦ Business registration assistance (if needed)<br>
      ✦ Full brand strategy & positioning document<br>
      ✦ Messaging & tone guide<br>
     ✦ Google Workspace + CRM setup<br>
      ✦ Newsletter and contact systems<br>
     ✦ Company onboarding docs<br>
      ✦ Social media optimization<br>
     ✦ Blog-ready website (up to 5 pages) + training<br><br>
      <strong>New in Scale:</strong><br>
     ✦ <strong>Content Strategy Playbook</strong><br>
      ✦ <strong>Media Kit & Brand Ambassador Assets</strong><br>
      ✦ <strong>Referral/Loyalty Program Framework</strong><br>
      ✦ <strong>Campaign Landing Pages</strong><br>
      ✦ <strong>Advanced SEO Setup</strong><br>
      ✦ <strong>Analytics Dashboard</strong><br><br>
      This is about clarity, automation, and decision-making power.
    `,
    icon: icon1,
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 4: Visual Identity, Content Engine & Online Impact',
    subtitle: 'Your brand becomes an experience — online and off.',
    description: `
      <strong>Everything in Starter + Growth included:</strong><br>
      ✦ Logo, brand manual<br>
      ✦ Flyers, cards, templates<br>
      ✦ Website setup<br>
      ✦ Social media kit<br>
      ✦ Onboarding docs<br>
      ✦ Newsletter system<br>
      ✦ Basic web presence<br><br>
      <strong>Plus in Scale:</strong><br>
      ✦ <strong>Seasonal Marketing Kits</strong><br>
      ✦ <strong>Web Content Updates</strong><br>
      ✦ <strong>Landing Pages</strong><br>
      ✦ <strong>Fully Managed Social Presence</strong><br>
      ✦ <strong>2 Short-Form Video Ads/Reels per month</strong><br><br>
      Your brand won’t just look the part — it will perform at every touchpoint.
    `,
    icon: icon1,
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 5: Ongoing Power Support & Growth Tracking',
    subtitle: 'We don’t leave your growth to chance — we track, improve, and adapt.',
    description: `
      ✦ <strong>12 Social Media Posts/Month</strong><br>
      ✦ <strong>2 Short-Form Reels/Ads/Month</strong><br>
      ✦ <strong>Full Social Media Management</strong><br>
      ✦ <strong>Newsletter Assistance</strong><br>
      ✦ <strong>Monthly Strategy Check-ins</strong><br>
      ✦ <strong>Quarterly Growth Sessions</strong><br>
      ✦ <strong>Ongoing SEO Optimization</strong><br>
      ✦ <strong>Monthly Analytics Reports</strong><br>
      ✦ <strong>Dedicated Support Team</strong><br><br>
      <strong>💰 GHS 2,000/month</strong> — built for growing, scaling, and leading brands that want clarity, polish, and serious results.
    `,
    icon: icon1,
    iconClass: 'styled-icon',
  },
];

const HowItWorksModalScale = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      closeModal();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setDirection(index > currentStep ? 1 : -1);
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
        <div className="howitworks-topbar">
          <h2 className="modal-title">How it works – Scale Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        <div className="stepper">
          {steps.map((_, index) => (
            <div key={index} className="step-wrapper">
              <div
                className={`step-circle ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </div>
              {index !== steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
            transition={{ duration: 0.4 }}
            className="step-content"
          >
            <div className="step-card">
              <div className="step-heading">
              
        
                <div className="step-titles">
                  <h3>{steps[currentStep].title}</h3>
                  <h4>{steps[currentStep].subtitle}</h4>
                </div>
              </div>

              <div
                className="step-description"
                dangerouslySetInnerHTML={{ __html: steps[currentStep].description }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="step-buttons">
          {currentStep !== 0 && (
            <button className="prev-btn" onClick={handlePrev}>
              <img src={leftArrow} alt="Previous" />
            </button>
          )}
          {currentStep !== steps.length - 1 && (
            <button className="next-btn" onClick={handleNext}>
              <img src={rightArrow} alt="Next" />
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
        <AnimatePresence>{isOpen && modalContent}</AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default HowItWorksModalScale;
