import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorksModal.css';



import CancelCircleIcon from '../../images/icons/cancel-circle.svg';
import LeftCircleIcon from '../../images/icons/left-circle.svg';
import RightCircleIcon from '../../images/icons/right-circle.svg';

// Steps Data
const steps = [
  {
    title: 'Step 1: Tell us who you are',
    subtitle: 'We believe in growing with you.',
    description: 'That’s all you need to do to get started. No paperwork, no pressure. Once you submit your details, our team reaches out to schedule a discovery call at a time that works for you.',
    
  },
  {
    title: "Step 2: Let's talk about your dreams",
    subtitle: 'Once your call is booked, we connect with you directly.',
    description: 'You tell us about your business — or the one you’re dreaming of. What are you doing now? Where do you want to go? We’ll listen, ask the right questions, and begin shaping how UNEXT can support you as your growth partner.',
    
  },
  {
    title: 'Step 3: Strategy comes first',
    subtitle: 'After the call, we begin crafting your roadmap.',
    description: `Together, we’ll outline a strategy that positions your brand, supports your operations, and sets a clear path forward.<br><br>
<strong>🔹 Already registered?</strong> Perfect.<br>
<strong>🔹 Not registered yet?</strong> No worries — we’ll handle that for you.<br><br>
This step ensures your foundation is solid and aligned with your long-term goals.`,
   
  },
  {
    title: 'Step 4: Setup, branding & identity',
    subtitle: 'Once your strategy is set, we bring it to life.',
    description: `We handle all the essentials that make your business look and feel professional from day one:<br><br>
<strong>🔹 Logo Design + Brand Manual</strong> – for a consistent, memorable identity<br>
<strong>🔹 Business Card, Letterhead, Flyers</strong> – for a cohesive offline presence<br>
<strong>🔹 Company Email + Signature</strong> – so every message reflects your brand<br>
<strong>🔹 Profile Setup</strong> – we optimize your social media presence<br>
<strong>🔹 Templates</strong> – branded invoices, proposals, and more<br><br>
<strong>💰 One-time Setup Fee: GHS 2,950.00</strong><br>
This covers the entire setup, branding, and business launch essentials.`,
   
  },
  {
    title: 'Step 5: Ongoing support — we stay with you',
    subtitle: 'You’re up and running — and we can keep growing together.',
    description: `Every month, you’ll receive the support and guidance you need to stay consistent and grow confidently:<br><br>
<strong>🔹 Up to 5 Custom Social Media Posts/Month</strong> – designed and written just for you<br>
<strong>🔹 Branding Add-ons</strong> – quick updates, tweaks, and small extensions<br>
<strong>🔹 Light Social Media Management</strong> – we help keep your presence active<br>
<strong>🔹 Priority Email Support</strong> – fast, responsive help from our team<br>
<strong>🔹 Business Guidance</strong> – regular strategic advice tailored to your journey<br><br>
<strong>💰 Optional monthly support: GHS 290/month</strong><br>
Choose this if you want to stay consistent, visible, and supported every step of the way.`,
   
  },
];

const HowItWorksModalStarter = () => {
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
          <h2 className="modal-title">How it works – Starter Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src={CancelCircleIcon} alt="Close" />
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
              <img src={LeftCircleIcon} alt="Previous" />
            </button>
          )}
          {currentStep !== steps.length - 1 && (
            <button className="next-btn" onClick={handleNext}>
              <img src={RightCircleIcon} alt="Next" />
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

export default HowItWorksModalStarter;
