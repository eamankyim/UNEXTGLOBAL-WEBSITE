import React from 'react';
import { motion } from 'framer-motion';
import './WhatsNextSection.css';

// Imports for assets
import whatsNextVideo from '/videos/whatsnext.mp4'; // ✅ If this is in /public/videos/, this is fine
import FaqIcon from '../../images/icons/faq.svg';    // ✅ Adjust path based on file structure
import NextIcon from '../../images/icons/next-icon.svg';
import GetStartedFlowCustomBtn from './GetStartedFlowCustomBtn';


const WhatsNextSection = () => {
  return (
    <section className="whats-next-section">
      {/* Custom Icon */}
      <div className="custom-icon">
        <motion.img
          src={FaqIcon}
          alt="Custom Icon"
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

      <GetStartedFlowCustomBtn />

        <div className="whats-next-video">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={whatsNextVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </div>
    </section>
  );
};

export default WhatsNextSection;
