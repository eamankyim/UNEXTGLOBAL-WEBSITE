import React from "react";
import "./LetsTalkSection.css";
import callIcon from "/images/icons/call-icon.svg"; // Adjust the path based on your project structure

const LetsTalkSection = () => {
  return (
    <section className="LetsTalk-section" data-aos="fade-up">
      <div className="uare-next-content">
        <div className="uare-next-text">
          <h2>Not sure what fits? Let's talk</h2>
          <h3>Need a custom plan, specific service, or just unsure where to start?</h3>
       
        </div>
        <div className="cta">
          <a href="#book-a-call" className="book-a-call-button">
            Book a discovery call
            <img src={callIcon} alt="Call Icon" className="cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
