import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LadyImage from "/images/cslady.png";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import "./WhatWeStandFor.css";

const values = [
  {
    title: "Strategy-first thinking",
    content: "We don’t jump in blindly. We listen, understand, and build with purpose.",
  },
  {
    title: "True partnership",
    content: "We’re not just a vendor. We grow with you — through every pivot, win, and challenge.",
  },
  {
    title: "Solutions, not just services",
    content: "We’re here to solve real business problems — creatively and sustainably.",
  },
  {
    title: "Growth-driven design & tech",
    content: "Every brand, every system, and every strategy we build is designed for scale.",
  },
  {
    title: "Trust & transparency",
    content: "We sign NDAs, work with compliance partners, and protect your business like it’s our own.",
  },
];

const WhatWeStandFor = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="whatwe-wrapper">
      <motion.div
        className="whatwe-inner-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="top-card">
          <h2>What we stand for</h2>
          <p>
            At uNext, everything we do is rooted in clarity, collaboration, and a real drive to help businesses grow. These values guide how we work, who we work with, and what we deliver.
          </p>
        </div>

        <div className="whatwe-container">
          <div className="whatwe-left">
            <div className="accordion">
              {values.map((item, index) => (
                <motion.div
                  className={`accordion-item ${openIndex === index ? "open" : ""}`}
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-title">
                    <span className={`bullet-icon ${openIndex === index ? "active" : ""}`} />
                    <h4>{item.title}</h4>
                    <span className="accordion-icon">
                      {openIndex === index ? <FiChevronDown /> : <FiChevronRight />}
                    </span>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        className="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="whatwe-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={LadyImage} alt="Customer Success Lady" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeStandFor;
