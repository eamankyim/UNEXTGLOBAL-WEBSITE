import React from 'react';
import { motion } from 'framer-motion';
import './WhatsNextSection.css';
import whatsNextVideo from '/videos/whatsnext.mp4'; // Adjust path as needed

const WhatsNextSection = () => {
  return (
    <section className="whats-next-section">
      {/* Custom Icon */}
      <div className="custom-icon">
        <motion.img
          src="images/icons/question-mark.svg"
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
            What's Next? uNext
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This is the platform built to elevate your business. <br />
            Smart solutions, powerful tools, and ongoing support — this is where you grow, from S to S — powered by strategy. Get started.
          </motion.p>
        </div>

        <motion.div
          className="cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#get-started" className="get-started-button">
            Get started <img src="images/icons/next-icon.svg" alt="Icon" className="cta-icon" />
          </a>
        </motion.div>

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
