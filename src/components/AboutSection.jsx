import React from "react";
import "./AboutSection.css";
import LeftArrowBlue from "/images/icons/LeftArrow.svg";
import RightArrowOrange from "/images/icons/RightArrow.svg";

import Icon1 from "/images/icons/icon1.svg";
import Icon2 from "/images/icons/icon2.svg";
import Icon3 from "/images/icons/icon3.svg";

const AboutSection = () => {
  return (
    <section className="aboutmission-wrapper">
      <img src={LeftArrowBlue} alt="" className="aboutmission-arrow left" />
      <img src={RightArrowOrange} alt="" className="aboutmission-arrow right" />

      <div className="aboutmission-content">
        <div className="aboutmission-cards">
          <div className="aboutmission-card">
            <p>
              <strong>UNEXT</strong> is your all-in-one business growth partner — combining branding, strategy, tech, design, and customer experience into one powerful platform.
              Whether you’re starting from scratch or scaling up, we’re here to guide you from Structure to Strategy — and beyond.
            </p>
          </div>

          <div className="aboutmission-card mission">
            <h3>Our mission</h3>
            <p>
              To empower SMEs to grow smarter, faster, and stronger — through strategic support,
              powerful tools, and expert guidance that adapts with you.
            </p>
          </div>
        </div>

        <div className="aboutmission-stats">
  <div className="aboutmission-stat stat-blue">
    <div className="stat-top">
      <div className="stat-number">1</div>
      <div className="stat-icon-wrapper">
        <img src={Icon1} alt="Agency Icon" className="stat-icon" />
      </div>
    </div>
    <div className="stat-label">Agency</div>
  </div>

  <div className="aboutmission-stat stat-peach">
    <div className="stat-top">
      <div className="stat-number">4</div>
      <div className="stat-icon-wrapper">
        <img src={Icon2} alt="Teams Icon" className="stat-icon" />
      </div>
    </div>
    <div className="stat-label">Teams</div>
  </div>

  <div className="aboutmission-stat stat-purple">
    <div className="stat-top">
      <div className="stat-number">8+</div>
      <div className="stat-icon-wrapper">
        <img src={Icon3} alt="Services Icon" className="stat-icon" />
      </div>
    </div>
    <div className="stat-label">Services</div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutSection;
