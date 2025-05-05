import React from "react";
import { motion } from "framer-motion";
import "./UareNextSection.css";
import callIcon from "/images/icons/next-icon.svg";
import GetStartedFlow2 from './GetStartedFlow2';
import GetStartedFlowCustomBtn from "./GetStartedFlowCustomBtn";

const UareNextSection = () => {
  return (
    <motion.section
      className="uare-next-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      aria-labelledby="uare-next-heading"
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
          <h3>Let’s build something incredible together.</h3>
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
          <motion.a
  
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <GetStartedFlowCustomBtn />

          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UareNextSection;
