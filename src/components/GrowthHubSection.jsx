import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./GrowthHubSection.css";
import GetStartedFlow2 from "./GetStartedFlow2";
import GetStartedFlowCustomBtn from "./GetStartedFlowCustomBtn";

const GrowthHubSection = () => {
  return (
    <motion.section
      className="growth-hub-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="content-wrapper">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          A <span className="highlight">one-stop</span> growth hub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From launching a brand to building custom software, training your team — <strong>UNEXT</strong> is where businesses find every solution they need to grow.
          <br />
          All in one place. All under one roof.
        </motion.p>

      
         <GetStartedFlowCustomBtn />
       
      </div>
    </motion.section>
  );
};

export default GrowthHubSection;
