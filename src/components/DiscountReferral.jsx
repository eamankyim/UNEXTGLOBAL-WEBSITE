import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // <-- Import EmailJS
import { createPortal } from 'react-dom'; // <-- Import createPortal for modal
import './DiscountReferral.css';
import { AnimatePresence } from 'framer-motion';

import giftbox from '../../images/giftbox.png';
import happyman from '../../images/happyman.png';
import shape1 from '../../images/shape1.png';
import shape2 from '../../images/shape2.png';

import SuccessIcon from '../../images/icons/success-icon.svg'; // <-- Import the success icon

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const DiscountReferral = () => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isThankYouPage, setIsThankYouPage] = useState(false); // State for modal visibility
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFB800', '#FFFACD'],
      shapes: ['square'],
      scalar: 1.2,
    });

    const duration = 3000;
    const end = Date.now() + duration;

    const drizzleInterval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(drizzleInterval);
        return;
      }

      confetti({
        particleCount: 5,
        spread: 40,
        startVelocity: 10,
        angle: 90,
        origin: { x: Math.random(), y: 0 },
        colors: ['#FFD700', '#FFB800', '#FFFACD'],
        scalar: 0.8,
        ticks: 100,
      });
    }, 600);

    return () => clearInterval(drizzleInterval);
  }, []);

  const handleGoToHomePage = () => {
    navigate('/');
  };

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading when the form is submitted

    const templateParams = {
        name: 'Referral Program',
        phone: whatsappNumber,
        time: new Date().toLocaleString(),
      };
      

    // Send the email using EmailJS
    emailjs
      .send(
        'service_kpbjj5o', // Replace with your EmailJS service ID
        'template_7uw3jpi', // Replace with your EmailJS template ID
        templateParams,
        'SHdS95AzNfrN1-FXf' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsThankYouPage(true); // Show the thank you modal after successful submission
          setIsLoading(false); // Stop loading after the email is sent successfully
        },
        (error) => {
          console.log('FAILED...', error);
          setIsLoading(false); // Stop loading if there's an error
        }
      );
  };

  const closeModal = () => {
    setIsThankYouPage(false); // Close the modal
  };

  return (
    <div className="DiscountContainer">
      <div className="background-shapes">
        <motion.div className="shape1" initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
          <img src={shape1} alt="shape1" />
        </motion.div>
        <motion.div className="shape2" initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.4 } }}>
          <img src={shape2} alt="shape2" />
        </motion.div>
      </div>

      <div className="discount-referral-wrapper">
        <motion.section className="discount-section" variants={fadeIn} initial="hidden" animate="visible">
          <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
            <span>10%</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }}>
            Off all our services - for a whole year
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }}>
            As a token of appreciation, enjoy 10% off any service you use with UNEXT Global. From strategy and branding to tech and CX — no limits, just value.
          </motion.p>
          <motion.div className="badges" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}>
            <span><i className="fas fa-check-circle"></i> Valid for 12 months</span>
            <span><i className="fas fa-check-circle"></i> Use anytime, across all services</span>
          </motion.div>
          <img src={giftbox} alt="Gift box" className="giftbox" />
        </motion.section>

        <motion.div className="referralContainer" variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
          <section className="referral-section">
            <motion.div className="referral-card">
              <div className="referral-content">
                <h3>🤝 Join Our Referral Program</h3>
                <h4>Earn 10% on Every Deal You Bring</h4>
                <p>
                  You now have the chance to earn by helping others grow. When someone you refer
                  signs up for a service, you earn <strong>10%</strong> of whatever they pay, no cap.
                </p>
                <p>Enter your WhatsApp number to activate your reward and get your referral access.</p>
                <form onSubmit={handleReferralSubmit}>
                  <input
                    type="text"
                    placeholder="+233 XXX XXX XXX"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    required
                    disabled={isLoading} // Disable input while loading
                    className={isLoading ? 'loading' : ''}
                  />
                  <button type="submit" disabled={isLoading}> {/* Disable button while loading */}
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
              <div className="referral-image">
                <img src={happyman} alt="Happy man pointing" />
              </div>
            </motion.div>
          </section>
          <button className="welcome-button" onClick={handleGoToHomePage}>
            Discover what we do
          </button>
        </motion.div>
      </div>

      {/* Thank You Modal */}
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
                <img src={SuccessIcon} alt="Success" className="success-icon" />
                <h2>Your number has been sent!</h2>
                <p>
                  Our team will get intouch with you shortly. 
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
    </div>
  );
};

export default DiscountReferral;
