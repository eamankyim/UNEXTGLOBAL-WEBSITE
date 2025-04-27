import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';
import "./GetStartedFlow.css"; // Assuming you have your styles here





const GetStartedFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessSize: '',
    services: [],
    reachDate: null,
    reachTime: '',
    reachMethod: '',
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false); // State for custom calendar modal

  // Save form data to localStorage to persist if closed
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

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((service) => service !== value),
      }));
    }
  };

  const nextStep = () => {
    if (!validateForm()) return;
    if (currentStep < 8) {
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
  };

  const validateForm = () => {
    // For each step, check if essential fields are filled
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
    if (currentStep === 4 && !formData.businessName) {
      toast.error('Business name is required!');
      return false;
    }
    if (currentStep === 5 && !formData.businessSize) {
      toast.error('Business size is required!');
      return false;
    }
    if (currentStep === 6 && formData.services.length === 0) {
      toast.error('Please select at least one service!');
      return false;
    }
    if (currentStep === 7 && !formData.reachTime) {
      toast.error('Please select a date!');
      return false;
    }
    if (currentStep === 7 && !formData.reachTime) {
      toast.error('Please select a time!');
      return false;
    }
    if (currentStep === 8 && !formData.reachMethod) {
      toast.error('Please select your preferred contact method!');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before submitting
    if (!validateForm()) return;

    // Submit form via EmailJS
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        toast.success('Form submitted successfully!');  // Show success toast
        closeModal();  // Close the modal
      })
      .catch((error) => {
        toast.error('Something went wrong, please try again later!');  // Show error toast
      });
  };

  const handleBookingTime = (date, time) => {
    setFormData((prev) => ({
      ...prev,
      reachDate: date,
      reachTime: time,
    }));
    setIsCalendarModalOpen(false);
    setCurrentStep(7); // Move back to the 7th step
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
          {isOpen && (
            <div className="getstarted-overlay">
              <div className="getstarted-card" style={{ height: "500px" }}>

                {/* Stepper: Show current step out of total steps */}
                <div className="stepper-container">
                  <p>{`${currentStep} of 8`}</p>
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

                  {currentStep === 4 && (
                    <>
                      <h3>What's your business name?</h3>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Enter your business name"
                      />
                    </>
                  )}

                  {currentStep === 5 && (
                    <>
                      <h3>What's your business size?</h3>
                      <select
                        name="businessSize"
                        value={formData.businessSize}
                        onChange={handleInputChange}
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1 - 10 team</option>
                        <option value="11-20">11 - 20 team</option>
                        <option value="20+">20+ team</option>
                      </select>
                    </>
                  )}

                  {currentStep === 6 && (
                    <>
                      <h3>What services are you most interested in?</h3>
                      <div className="checkbox-group">
                        {["Logo & Branding", "Social Media", "Website Design", "Business Consulting"].map((service) => (
                          <label key={service} className="checkbox-option">
                            <input
                              type="checkbox"
                              name="services"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleServiceChange}
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                    </>
                  )}


{currentStep === 7 && (
  <>
    <h3>Best time to reach you?</h3>
    <input
      type="time"
      value={formData.reachTime || ''}
      onChange={(e) => {
        setFormData((prevData) => ({
          ...prevData,
          reachTime: e.target.value,
        }));
      }}
      className="time-input"
      placeholder="12:00 PM"
    />
  </>
)}


                  {currentStep === 8 && (
                    <>
                      <h3>How do you want to be reached?</h3>
                      <select
                        name="reachMethod"
                        value={formData.reachMethod}
                        onChange={handleInputChange}
                      >
                        <option value="">Select method</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email</option>
                        <option value="Video Call">Video Call</option>
                        <option value="In-Person">In-Person</option>
                      </select>
                    </>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="navigation-buttons">
                  {currentStep > 1 && (
                    <button onClick={previousStep}>
                      <img src="images/icons/left-circle.svg" alt="Previous" />
                    </button>
                  )}
                  {currentStep < 8 ? (
                    <button onClick={nextStep}>
                      <img src="images/icons/right-circle.svg" alt="Next" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit}>
                      <img src="images/icons/check-circle.svg" alt="Submit" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Custom Calendar Modal */}
      {createPortal(
        <AnimatePresence>
          {isCalendarModalOpen && (
            <div className="calendar-overlay">
              <div className="calendar-card">
                <div className="stepper-container">
                  <button className="close-button" onClick={() => setIsCalendarModalOpen(false)}>X</button>
                </div>

                <h3>Pick a Date and Time</h3>
                {/* Custom Calendar */}
                <div className="calendar-container">
                  {/* Custom Calendar component goes here */}
                  {/* Replace the button below with your actual calendar interface */}
                  <button onClick={() => handleBookingTime('2025-05-01', '10:00 AM')}>
                    Select May 1, 2025 at 10:00 AM
                  </button>
                </div>
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

export default GetStartedFlow;
