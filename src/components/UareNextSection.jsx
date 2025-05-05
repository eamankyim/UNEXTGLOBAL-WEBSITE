'use client';

import React from "react";
import { motion } from "framer-motion";
import "./UareNextSection.css";
import GetStartedFlowCustomBtn from "./GetStartedFlowCustomBtn";

const UareNextSection = () => {
  const handleViewTracking = () => {
    if (window.gtag) {
      window.gtag("event", "view_you_are_next_section", {
        event_category: "Section View",
        event_label: "You Are Next Section",
      });
    }
  };

  return (
    <motion.section
      className="uare-next-section"
      role="region"
      aria-labelledby="uare-next-heading"
      aria-describedby="uare-next-description"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      onViewportEnter={handleViewTracking}
    >
      <div className="uare-next-content">
        <motion.div
          className="uare-next-text"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 id="uare-next-heading">You are Next</h2>
          <h3 id="uare-next-description">Let’s build something incredible together.</h3>
          <p>
            Whether you're starting fresh or scaling big, uNext is your
            all-in-one partner for growth. Strategy, design, tech — we’ve got
            you covered.
          </p>
        </motion.div>

        <motion.div
          className="cta"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            role="button"
            aria-label="Start your project with uNext"
            tabIndex={0} // Ensure button is focusable
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "click_you_are_next_cta", {
                  event_category: "CTA Click",
                  event_label: "You Are Next - Get Started",
                });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (window.gtag) {
                  window.gtag("event", "click_you_are_next_cta", {
                    event_category: "CTA Click",
                    event_label: "You Are Next - Get Started",
                  });
                }
              }
            }}
          >
            <GetStartedFlowCustomBtn />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UareNextSection;
