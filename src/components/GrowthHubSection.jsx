import React from "react";
import { ArrowRight } from "lucide-react"; // or any arrow icon
import "./GrowthHubSection.css";

const GrowthHubSection = () => {
  return (
    <section className="growth-hub-section">
      <div className="content-wrapper">
        <h2>
          A <span className="highlight">one-stop</span> growth hub
        </h2>
        <p>
          From launching a brand to building custom software, training your team — <strong>UNEXT</strong> is where businesses find every solution they need to grow.
          <br />
          All in one place. All under one roof.
        </p>
        <button className="cta-button">
          Get started <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default GrowthHubSection;
