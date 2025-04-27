import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GetStartedFlow.css"; // Your styles

const GetStartedFlow2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouPage, setIsThankYouPage] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('getStartedData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
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
  };

  const nextStep = () => {
    if (!validateForm()) return;
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setIsThankYouPage(false);
  };

  const validateForm = () => {
    if (currentStep === 1 && !formData.name) {
      toast.error('Name is required!');
      return false;
    }
    if (currentStep === 2 && !formData.phone) {
      toast.error('Phone number is required!');
      return false;
    }
    if (currentStep === 3 && !formData.email) {
      toast.error('Email is required!');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      title: 'New Inquiry', // Ensure this matches your template in EmailJS
    };

    emailjs
      .send(
        'service_4gwdw66', // Your Service ID
        'template_f2hxwwv', // Your Template ID
        templateParams,
        'sC-_iyRAcruYtVAkS' // <-- Replace with your EmailJS public key
      )
      .then(() => {
        toast.success('Form submitted successfully!');
        setIsThankYouPage(true);
        localStorage.removeItem('getStartedData'); // Optional: clear form data
      })
      .catch((error) => {
        console.error('EmailJS error: ', error);  // Log error to the console for debugging
        toast.error('Something went wrong, please try again later!');
      });
  };

  return (
    <>
      {/* Get Started Button */}
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Get Started
      </button>

      {/* Main Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && !isThankYouPage && (
            <div className="getstarted-overlay">
              <div className="getstarted-card" style={{ height: "500px" }}>

                {/* Stepper */}
                <div className="stepper-container">
                  <p>{`${currentStep} of 3`}</p>
                </div>

                {/* Content Based on Step */}
                <div className="step-content">
                  {currentStep === 1 && (
                    <>
                      <h3>What's your name?</h3>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
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
                        placeholder="Enter your phone number"
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
                        placeholder="Enter your email"
                      />
                    </>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="navigation-buttons">
                  {currentStep > 1 && (
                    <button onClick={previousStep} className="nav-button">
                      <img src="images/icons/left-circle.svg" alt="Previous" />
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button onClick={nextStep} className="nav-button">
                      <img src="images/icons/right-circle.svg" alt="Next" />
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
            <div className="getstarted-overlay">
              <div className="getstarted-card" style={{ height: "300px" }}>
                <h3>Thank you for choosing Unext!</h3>
                <p>Our team will engage you shortly to book a discovery call and learn about your business.</p>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default GetStartedFlow2;
