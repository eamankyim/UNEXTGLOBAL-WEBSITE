import React from "react";
import "./UareNextSection.css";
import callIcon from "/images/icons/call-icon.svg"; // Adjust the path based on your project structure

const UareNextSection = () => {
  return (
    <section className="uare-next-section" data-aos="fade-up">
      <div className="uare-next-content">
        <div className="uare-next-text">
          <h2>You are Next</h2>
          <h3>Let’s build something incredible together.</h3>
          <p>
            Whether you're starting fresh or scaling big, uNext is your
            all-in-one partner for growth. Strategy, design, tech — we’ve got
            you covered.
          </p>
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

export default UareNextSection;
