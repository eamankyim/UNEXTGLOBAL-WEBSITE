import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

import LeftArrowBlue from "/images/icons/LeftArrow.svg";
import RightArrowOrange from "/images/icons/RightArrow.svg";
import Icon1 from "/images/icons/icon1.svg";
import Icon2 from "/images/icons/icon2.svg";
import Icon3 from "/images/icons/icon3.svg";

const AboutSection = () => {
  return (
    <section className="aboutmission-wrapper">
      <img
        src={LeftArrowBlue}
        alt="Left arrow pointing left"
        className="aboutmission-arrow left"
      />
      <img
        src={RightArrowOrange}
        alt="Right arrow pointing right"
        className="aboutmission-arrow right"
      />

      <div className="aboutmission-content">
        <motion.div
          className="aboutmission-cards"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="aboutmission-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              <strong>UNEXT</strong> is your all-in-one business growth partner —
              combining branding, strategy, tech, design, and customer experience into one powerful platform.
              Whether you’re starting from scratch or scaling up, we’re here to guide you from Structure to Strategy — and beyond.
            </p>
          </motion.div>

          <motion.div
            className="aboutmission-card mission"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower SMEs to grow smarter, faster, and stronger — through strategic support,
              powerful tools, and expert guidance that adapts with you.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="aboutmission-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[{
            number: "1", icon: Icon1, label: "Agency", className: "stat-blue"
          }, {
            number: "4", icon: Icon2, label: "Teams", className: "stat-peach"
          }, {
            number: "8+", icon: Icon3, label: "Services", className: "stat-purple"
          }].map((stat, index) => (
            <motion.div
              key={index}
              className={`aboutmission-stat ${stat.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.2 }}
            >
              <div className="stat-top">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-icon-wrapper">
                  <img
                    src={stat.icon}
                    alt={`${stat.label} Icon`}
                    className="stat-icon"
                  />
                </div>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
