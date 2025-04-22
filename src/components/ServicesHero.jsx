import React from "react";
import Image1 from "/images/servicehero1.jpg";

import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <div className="serviceshero-wrapper">
      <div className="serviceshero-text">
        <h1>
          Helping <span className="highlight">U</span> become the <span className="highlight">Next</span> big thing
        </h1>
        <p>
          We help you find growth opportunities, refine strategies, and scale your business — whether you're rebranding or starting fresh.
        </p>
      </div>

      <div className="serviceshero-image-container">
        <img src={Image1} alt="Hero Visual" className="serviceshero-image" />
      </div>
    </div>
  );
};

export default ServicesHero;
