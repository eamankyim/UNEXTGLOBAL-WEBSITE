import React from "react";
import "./CollaborationSection.css";
import { motion } from "framer-motion";

import partner1 from "/images/icons/hubtel.png";
import partner2 from "/images/icons/orc.png";
import partner3 from "/images/icons/fda.png";
import partner4 from "/images/icons/meta.png";

const partners = [
  { logo: partner1, title: "Hubtel", subtitle: "Telecom & Payment Services"},
  { logo: partner2, title: "Office of Registrar of Companies", subtitle: "Business Registration" },
  { logo: partner3, title: "Food & Drug board Authority", subtitle: "Product Regulation"},
  {
    logo: partner4, title: "Meta Business Partner", subtitle: "Digital marketing"
  },
];

const cardTransforms = [
  { x: 0, y: 0, rotate: 0 },
  { x: 60, y: 60, rotate: 0 },
  { x: 120, y: 120, rotate: 0 },
  { x: 180, y: 180, rotate: 0 },
];

const isMobile = window.innerWidth <= 900;

const CollaborationSection = () => {
  return (
    <div className="collab-wrapper">
      <div className="collab-left">
        <h2>We don’t do it alone</h2>
        <p>
          We’re strong believers in collaboration — so we’ve built partnerships with:
        </p>
        <ul>
          <li>Governing bodies</li>
          <li>Global tech giants</li>
          <li>Business consultants & strategists</li>
          <li>Service & tool providers</li>
        </ul>
      </div>

      <div className="collab-right">
        {partners.map((card, index) => {
          const cardElement = (
            <div className="partner-card" key={index}>
              <div className="card-content">
                <div className="card-logo">
                  <img src={card.logo} alt={`${card.title} logo`} />
                </div>
                <div className="card-info">
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
          );

          if (isMobile) return cardElement;

          return (
            <motion.div
              key={index}
              className="partner-card"
              initial={{
                x: cardTransforms[index].x,
                y: cardTransforms[index].y,
                rotate: cardTransforms[index].rotate,
              }}
              whileHover={{ y: cardTransforms[index].y - 60 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: index + 1, position: "absolute" }}
            >
              {cardElement.props.children}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CollaborationSection;
