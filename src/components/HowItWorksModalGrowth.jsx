import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksModal.css';

const steps = [
  {
    title: 'Step 1: Start With a Quick Hello',
    subtitle: 'Enter your name, email, and phone number.',
    description: `Once you submit your details, our team reaches out to book a discovery call that fits your schedule. It’s relaxed and personal — just the beginning of a strong working relationship.`,
    icon: '/images/icons/starter-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 2: Deep Dive Into Your Vision',
    subtitle: 'We connect for a discovery session — but we go deeper this time.',
    description: `Tell us what you’ve built so far, the challenges you face, and the growth you envision. We’ll uncover what’s holding you back and what’s possible with the right tools and guidance.`,
    icon: '/images/icons/starter-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 3: Strategy, Structure & Brand Foundation',
    subtitle: 'Now we start building your business engine.',
    description: `
      <strong>Starter essentials included:</strong><br><br>
      🔹 Business registration assistance (if needed)<br>
      🔹 Strategy session to align your goals<br>
      🔹 Brand identity planning and positioning<br><br>
      <strong>Growth-level upgrades:</strong><br><br>
      ✦ <strong>Full Brand Strategy & Positioning Document</strong> – your long-term guide<br>
      ✦ <strong>Messaging & Tone Guide</strong> – voice consistency across channels<br>
      ✦ <strong>Google Workspace Setup</strong> – professional tools for email, storage, collaboration<br>
      ✦ <strong>CRM & Contact Forms (Tally, Notion, etc.)</strong> – organize your leads and client info<br>
      ✦ <strong>Newsletter Platform Setup</strong> – ready to collect and email your audience<br>
      ✦ <strong>Company Onboarding Docs</strong> – SOPs, welcome kits, team materials<br><br>
      This step aligns your brand with powerful systems and strategy, ready for scaling.
    `,
    icon: '/images/icons/starter-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 4: Setup, Branding & Digital Presence',
    subtitle: 'Now we make your brand fully visible and functional — online and offline.',
    description: `
      <strong>Starter deliverables included:</strong><br><br>
      🔹 Logo Design + Brand Manual<br>
      🔹 Social Media Starter Kit (banners, bios, 4 templates)<br>
      🔹 Business Card, Letterhead, Flyers<br>
      🔹 Company Email Setup + Signature<br>
      🔹 Social Media Profile Setup<br>
      🔹 Branded Templates (Invoices, Proposals)<br><br>
      <strong>Growth-level additions:</strong><br><br>
      ✦ <strong>Website Setup</strong> – up to 5 pages + blog-ready option<br>
      ✦ <strong>Website Training + Handover Kit</strong> – so you're empowered, not dependent<br>
      ✦ <strong>Advanced Social Media Optimization</strong> – upgraded visibility and SEO<br>
      ✦ <strong>Branded Company Onboarding Docs</strong> – for staff or collaborators<br>
      ✦ <strong>Newsletter System Ready to Go</strong> – email list growth starts now<br><br>
      Your business now looks, feels, and operates like a pro brand — everywhere it matters.
    `,
    icon: '/images/icons/starter-icon1.svg',
    iconClass: 'styled-icon',
  },
  {
    title: 'Step 5: Ongoing Growth Support (Included)',
    subtitle: 'We don’t disappear. We grow with you — every month.',
    description: `
      ✅ <strong>8 Custom Social Media Posts/Month</strong> – designed and written for your audience<br>
      ✅ <strong>1 Animated Story or Reel</strong> – professional, engaging video content<br>
      ✅ <strong>1 Motion Ad</strong> – designed for campaigns or promotions<br>
      ✅ <strong>Branding Add-ons</strong> – tweaks, seasonal changes, or feature extensions<br>
      ✅ <strong>Newsletter Assistance</strong> – content creation + formatting help<br>
      ✅ <strong>Monthly Strategy Check-Ins</strong> – to review progress and adjust tactics<br>
      ✅ <strong>Basic Website Updates</strong> – minor content changes and upkeep<br>
      ✅ <strong>Priority Email Support</strong> – fast answers when you need them<br><br>
      💰 <strong>GHS 1,000/month – all inclusive</strong><br>
      You get the systems, the visuals, and the monthly push to keep moving forward.
    `,
    icon: '/images/icons/starter-icon1.svg',
    iconClass: 'styled-icon',
  },
];

const HowItWorksModalGrowth = () => {
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
          <h2 className="modal-title">How it works – Growth Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src="/images/icons/cancel-circle.svg" alt="Close" />
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
                <img
                  src={steps[currentStep].icon}
                  alt="Step Icon"
                  className={`step-icon ${steps[currentStep].iconClass || ''}`}
                />
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
              <img src="/images/icons/left-circle.svg" alt="Previous" />
            </button>
          )}
          {currentStep !== steps.length - 1 && (
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


