import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // For basic calendar styles
import './GetStarted.css';
import { createPortal } from 'react-dom'; // For rendering modal outside the parent component
import { AnimatePresence } from 'framer-motion'; // For animations

const GetStartedStarter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility
  const [selectedDate, setSelectedDate] = useState(null);
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    size: '',
    industry: '',
    goals: '',
  });
  const [currentStep, setCurrentStep] = useState(1); // Track the current step

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({
      ...businessInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Business Info:', businessInfo);
    console.log('Appointment Date:', selectedDate);
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
    setCurrentStep(1); // Reset steps when closing modal
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {/* Get Started Button */}
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Get Started
      </button>

      {/* Modal with portal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="getstarted-overlay">
              <div className="getstarted-card">
                <div className="getstarted-topbar">
                  <h2 className="modal-title">Get started - Starter plan</h2>
                  <button className="close-btn" onClick={closeModal}>
  <img src="images/icons/cancel-circle.svg" alt="Close" />
</button>
                </div>

                {/* Step 1: Plan Confirmation & Information Collection */}
                {currentStep === 1 && (
                  <div className="step1">

                    <div className="business-info-form">
                      <h3>Business Information</h3>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Business Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={businessInfo.name}
                          onChange={handleInputChange}
                          required
                        />

                        <label>Business Size</label>
                        <select
                          name="size"
                          value={businessInfo.size}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select size</option>
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                        </select>

                        <label htmlFor="industry">Industry</label>
                        <input
                          type="text"
                          id="industry"
                          name="industry"
                          value={businessInfo.industry}
                          onChange={handleInputChange}
                          required
                        />

                        <label htmlFor="goals">Business Goals</label>
                        <textarea
                          id="goals"
                          name="goals"
                          value={businessInfo.goals}
                          onChange={handleInputChange}
                          required
                        />

                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                )}

                {/* Step 2: Appointment Scheduling */}
                {currentStep === 2 && (
                  <div className="step2">
                    <h3>Book Your Consultation</h3>
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      minDate={new Date()}
                    />
                    <div className="consultation-method">
                      <label>Consultation Method</label>
                      <select>
                        <option value="zoom">Zoom</option>
                        <option value="phone">Phone</option>
                        <option value="in-person">In-Person</option>
                      </select>
                    </div>
                    <label>Any Special Notes</label>
                    <textarea placeholder="Add any special notes"></textarea>
                  </div>
                )}

                {/* Step 3: Confirmation & Thank You */}
                {currentStep === 3 && (
                  <div className="step3">
                    <h3>Thank You!</h3>
                    <p>Your Growth Plan has been confirmed.</p>
                    <p>Appointment: {selectedDate ? selectedDate.toDateString() : 'Not selected yet'}</p>
                    <p>Consultation Method: Zoom</p>
                    <button onClick={() => console.log('Download Confirmation')}>
                      Download Confirmation
                    </button>
                    <button onClick={() => console.log('Add to Calendar')}>
                      Add to Calendar
                    </button>
                  </div>
                )}

                {/* Navigation */}
                <div className="stepper">
                  <button onClick={previousStep}>Back</button>
                  <button onClick={nextStep}>Next</button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default GetStartedStarter;
