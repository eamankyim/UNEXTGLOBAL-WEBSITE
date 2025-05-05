import React from "react";
import "./TeamHighlightSection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";
import GetStartedFlowCustomBtn from "./GetStartedFlowCustomBtn";

export default function TeamHighlightSection() {
  return (
    <motion.section
      className="team-highlight-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bold">1 Agency. </span>
          <span className="bold">8 Teams. </span>
          <span className="highlight">Many Experts.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Everything you need, all in one place — powered by a team built to
          help you scale, stand out, and succeed
        </motion.p>


         <GetStartedFlowCustomBtn />
       
      </div>
    </motion.section>
  );
}
