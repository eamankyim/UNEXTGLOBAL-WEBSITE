import React from 'react';
import './HeroSection.css';
import heroImage2 from '../assets/hero-image.png'; // update path as needed

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>
          Helping <span className="highlight-u">U</span> become the <span className="highlight-next">Next</span> big thing
        </h1>
        <p>
          We help you find growth opportunities, refine strategies, and scale your business — whether you're rebranding or starting fresh.
        </p>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImage2} alt="Business team collaborating" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
