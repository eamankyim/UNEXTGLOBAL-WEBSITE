import React from "react";
import { motion } from "framer-motion";
import Image1 from "/images/aboutus.jpg";
import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <div className="serviceshero-wrapper">
      <motion.div
        className="serviceshero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Helping <span className="highlight">U</span> become the{" "}
          <span className="highlight">Next</span> big thing
        </h1>
        <p>
          We help you find growth opportunities, refine strategies, and scale
          your business — whether you're rebranding or starting fresh.
        </p>
      </motion.div>

      <motion.div
        className="serviceshero-image-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={Image1}
          alt="Hero Visual"
          className="serviceshero-image"
        />
      </motion.div>
    </div>
  );
};

export default ServicesHero;
