import React from 'react';
import { motion } from 'framer-motion';
import './WhatsNextSection.css';

import whatsNextVideo from '/videos/whatsnext.mp4';
import FaqIcon from '../../images/icons/faq.svg';
import GetStartedFlowCustomBtn from './GetStartedFlowCustomBtn';

const WhatsNextSection = () => {
  const handleCTA = () => {
    window.gtag?.('event', 'click_get_started', {
      event_category: 'CTA',
      event_label: 'Whats Next Section',
    });
  };

  return (
    <motion.section
      id="whats-next"
      className="whats-next-section"
      aria-labelledby="whats-next-heading"
      onViewportEnter={() => {
        window.gtag?.('event', 'view_whats_next_section', {
          event_category: 'Section View',
          event_label: 'Whats Next Section',
        });
      }}
    >
      <div className="custom-icon" role="img" aria-label="Question icon">
        <motion.img
          src={FaqIcon}
          alt="Question mark icon"
          width="48"
          height="48"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="whats-next-content">
        <div className="whats-next-text">
          <motion.h2
            id="whats-next-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What's Next? U are Next!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This is the platform built to elevate your business. <br />
            Smart solutions, powerful tools, and ongoing support — this is where you grow, from S to S — powered by strategy.
          </motion.p>
        </div>

        <div onClick={handleCTA}>
          <GetStartedFlowCustomBtn />
        </div>

        <div className="whats-next-video">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Unext promotional video"
          >
            <source src={whatsNextVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatsNextSection;
