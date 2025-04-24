import React from "react";
import "./TeamHighlightSection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function TeamHighlightSection() {
  return (
    <section className="team-highlight-section">
      <div className="content-container">
        <h2>
          <span className="bold">1 Agency. </span>
          <span className="bold">8 Teams. </span>
          <span className="highlight">Many Experts.</span>
        </h2>
        <p>
          Everything you need, all in one place — powered by a team built to
          help you scale, stand out, and succeed
        </p>
        <a href="/contact" className="cta-button">
          Contact us <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
