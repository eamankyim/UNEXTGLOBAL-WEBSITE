import React from "react";
import { motion } from "framer-motion";
import GrowthIcon from "../../images/icons/growth.svg";
import SuperChargewoman from "../../images/superchargewoman.png";
import "./HeroSection2.css";

const HeroSection2 = () => {
  return (
    <motion.section
      id="hero-growth"
      className="hero-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        window.gtag?.('event', 'view_hero_section', {
          event_category: 'Section View',
          event_label: 'Hero Growth Section'
        });
      }}
      aria-labelledby="hero-growth-heading"
    >
      <div className="slider-wrapper">
        <motion.div
          className="left-section"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="top-row">
            <div className="heading">
              <motion.h2
                id="hero-growth-heading"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Supercharge your business
              </motion.h2>
              <motion.h1
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                GR
                <img
                  src={GrowthIcon}
                  alt="Growth"
                  className="growth-icon"
                />
                WTH
              </motion.h1>
            </div>
          </div>

          <motion.div
            className="bottom-row"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="description">
              We help you find growth opportunities, refine strategies, and
              scale your business — whether you're rebranding or starting fresh.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="right-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={SuperChargewoman}
            alt="Illustration of a businesswoman being supercharged"
            className="supercharge-woman"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection2;
