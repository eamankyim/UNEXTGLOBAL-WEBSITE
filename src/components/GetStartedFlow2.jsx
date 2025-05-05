import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './GetStartedFlow.css';

// ✅ Imported Icons
import CloseIcon from '../../images/icons/cancel-circle.svg';
import LeftArrowIcon from '../../images/icons/left-circle.svg';
import RightArrowIcon from '../../images/icons/right-circle.svg';
import SuccessIcon from '../../images/icons/success-icon.svg';

const GetStartedFlow2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouPage, setIsThankYouPage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shakeError, setShakeError] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('getStartedData');
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem('getStartedData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setShakeError(null);
  };

  const nextStep = () => {
    if (!validateForm()) return;
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setIsThankYouPage(false);
  };

  const validateForm = () => {
    setShakeError(null);
    if (currentStep === 1) {
      if (!formData.name || /\d/.test(formData.name)) {
        setShakeError('name');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.phone || !/^[\d\+\-\(\)\s]*$/.test(formData.phone)) {
        setShakeError('phone');
        return false;
      }
    }
    if (currentStep === 3) {
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        setShakeError('email');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setProgress(20);
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      title: 'New Inquiry',
    };

    emailjs
      .send(
        'service_4gwdw66',
        'template_f2hxwwv',
        templateParams,
        'sC-_iyRAcruYtVAkS'
      )
      .then(() => {
        setProgress(99);
        setTimeout(() => {
          setProgress(100);
          setIsThankYouPage(true);
          setIsSubmitting(false);
          setProgress(0);
          localStorage.removeItem('getStartedData');
        }, 1000);
      })
      .catch((error) => {
        console.error('EmailJS error: ', error);
        setIsSubmitting(false);
        setProgress(0);
      });
  };

  return (
    <>
      {/* Trigger Button */}
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Get Started
      </button>

      {/* Main Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && !isThankYouPage && (
            <div className="getstarted-overlay">
              <div className="getstarted-card">
                {/* Close Button */}
                <button className="close-icon-button" onClick={closeModal}>
                  <img src={CloseIcon} alt="Close" />
                </button>

                {/* Stepper */}
                <div className="stepper-container">
                  <p>{`${currentStep} of 3`}</p>
                </div>

                {/* Form Content */}
                <motion.div
                  className="step-content"
                  key={currentStep}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: 'easeIn', stiffness: 300, damping: 30 }}
                >
                  {currentStep === 1 && (
                    <>
                      <h3>What's your full name?</h3>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        pattern="[A-Za-z\s]*"
                        inputMode="text"
                        required
                        className={shakeError === 'name' ? 'shake' : ''}
                      />
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <h3>What's your phone number?</h3>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(+233) 000 000 000"
                        inputMode="tel"
                        pattern="[\d\+\-\(\)\s]*"
                        required
                        className={shakeError === 'phone' ? 'shake' : ''}
                      />
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <h3>What's your email address?</h3>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@gmail.com"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                        className={shakeError === 'email' ? 'shake' : ''}
                      />
                    </>
                  )}
                </motion.div>

                {/* Progress Bar */}
                {isSubmitting && (
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* Navigation */}
                <div className="navigation-buttons">
                  {currentStep > 1 && (
                    <button onClick={previousStep} className="nav-button">
                      <img src={LeftArrowIcon} alt="Previous" />
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button onClick={nextStep} className="nav-button">
                      <img src={RightArrowIcon} alt="Next" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="submit-button">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Thank You Page */}
      {createPortal(
        <AnimatePresence>
          {isThankYouPage && (
            <motion.div
              className="getstarted-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="getstarted-card"
                style={{ height: '300px' }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={SuccessIcon}
                  alt="Success"
                  className="success-icon"
                />
                <h2>Thank you for choosing Unext!</h2>
                <p>
                  Our team will engage you shortly to book a discovery call and
                  learn about your business.
                </p>
                <button onClick={closeModal} className="closeButton">
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <ToastContainer />
    </>
  );
};

export default GetStartedFlow2;
