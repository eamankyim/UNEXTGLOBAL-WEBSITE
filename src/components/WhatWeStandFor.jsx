import React, { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="whatwe-wrapper">
      <div className="whatwe-inner-container">
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
              <div
                className={`accordion-item ${openIndex === index ? "open" : ""}`}
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-title">
                  <span className={`bullet-icon ${openIndex === index ? "active" : ""}`} />
                  <h4>{item.title}</h4>
                  <span className="accordion-icon">
                    {openIndex === index ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                </div>
                {openIndex === index && item.content && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="whatwe-right">
          <img src={LadyImage} alt="Customer Success Lady" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;
