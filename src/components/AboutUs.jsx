import React from 'react';
import './AboutUs.css';
import teamImage from "/images/icons/location.svg"; // Replace with your own image

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h1>About <span className="highlight">UNEXT</span></h1>
        <p>We’re more than consultants — we’re your strategic growth partners.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            UNEXT was created with one bold idea — to help SMEs become the <strong>next big thing</strong>. We combine deep strategy, modern design, custom tech, and seamless customer experience to help your business grow smart and scale fast.
          </p>
          <p>
            Whether you're launching, rebranding, or evolving, we work as your extended team. From business planning and brand strategy to custom software, data-driven decisions, and team training — we’ve got you covered.
          </p>
          <p>
            With every project, we bring clarity, structure, and momentum — always tailored to your unique goals.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img src={teamImage} alt="UNEXT team working together" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
