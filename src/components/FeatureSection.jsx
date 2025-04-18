'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeatureSection.css';

const features = [
  { text: 'Streamline operations and scale with ease', image: 'images/feature1.png' },
  { text: 'Position your brand strategically in the market', image: 'images/feature2.png' },
  { text: 'Build a powerful and memorable brand identity', image: 'images/feature3.png' },
  { text: 'Leverage custom software to improve workflows and productivity', image: 'images/feature4.png' },
  { text: 'Manage and grow your social media presence across platforms', image: 'images/feature5.png' },
  { text: 'Access expert guidance and strategic insights', image: 'images/feature6.png' },
  { text: 'Get consistent support for every stage of your business journey', image: 'images/feature7.png' },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // To track hover state

  // Auto-animate logic using setInterval
  useEffect(() => {
    if (isHovered) return; // Don't auto-animate if hovering

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isHovered]);

  return (
    <section className="feature-section" id="feature-scroll">
      <h2 className="feature-heading">
        Partner with us for expert support that helps you scale, stand out, and succeed — all through a simple subscription.
      </h2>

      <div className="feature-card">
        <div className="feature-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={features[activeIndex].image}
              src={features[activeIndex].image}
              alt={`Feature ${activeIndex + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        <div className="feature-text">
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li
                key={index}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => { 
                  setIsHovered(true); // Stop animation on hover
                  setActiveIndex(index); // Set the hovered card as active
                }}
                onMouseLeave={() => {
                  setIsHovered(false); // Resume animation when hover ends
                }}
              >
                <span className="checkmark" />
                {feature.text}
              </li>
            ))}
          </ul>

          <div className="feature-cta">
            <a href="#get-started" className="get-started-button">
              Get started{' '}
              <img
                src="images/icons/next-icon.svg"
                alt="Arrow Icon"
                className="cta-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
