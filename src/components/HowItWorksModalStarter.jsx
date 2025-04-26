const HowItWorksModalStarter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
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
    setCurrentStep(index);  // Jump to the clicked step
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

        {/* Topbar with title and close */}
        <div className="howitworks-topbar">
          <h2 className="modal-title">How it works – Starter Plan</h2>
          <button className="close-button" onClick={closeModal}>
            <img src="/images/icons/cancel-circle.svg" alt="Close" />
          </button>
        </div>

        {/* Stepper with clickable numbers */}
        <div className="stepper">
          {steps.map((_, index) => (
            <div key={index} className="step-wrapper">
              <div
                className={`step-circle ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)} // Add the onClick handler
              >
                {index + 1}
              </div>
              {index !== steps.length - 1 && <div className="step-line"></div>}
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
                  src={steps[currentStep].icon}
                  alt="Step Icon"
                  className={`step-icon ${steps[currentStep].iconClass || ''}`} // Apply iconClass dynamically
                />
                <div className="step-titles">
                  <h3>{steps[currentStep].title}</h3>
                  <h4>{steps[currentStep].subtitle}</h4>
                </div>
              </div>

              {/* Description */}
              <p>{steps[currentStep].description}</p>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="step-buttons">
          <button className="prev-btn" onClick={handlePrev} disabled={currentStep === 0}>
            <img src="/images/icons/left-circle.svg" alt="Previous" />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <img src="/images/icons/right-circle.svg" alt="Next" />
          </button>
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
