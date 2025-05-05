'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeatureSection.css';

import feature1 from '../../images/feature1.avif';
import feature2 from '../../images/feature2.webp';
import feature3 from '../../images/feature3a.jpg';
import feature4 from '../../images/feature3.jpg';
import feature5 from '../../images/feature5.jpg';
import feature6 from '../../images/feature6.webp';
import feature7 from '../../images/feature7.webp';
import nextIcon from '../../images/icons/next-icon.svg';
import GetStartedFlow2 from './GetStartedFlow2';
import GetStartedFlowCustomBtn from './GetStartedFlowCustomBtn';

const features = [
  { text: 'Streamline operations and scale with ease', image: feature1 },
  { text: 'Position your brand strategically in the market', image: feature2 },
  { text: 'Build a powerful and memorable brand identity', image: feature3 },
  { text: 'Leverage custom software to improve workflows and productivity', image: feature4 },
  { text: 'Manage and grow your social media presence across platforms', image: feature5 },
  { text: 'Access expert guidance and strategic insights', image: feature6 },
  { text: 'Get consistent support for every stage of your business journey', image: feature7 },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.section
      className="feature-section"
      id="feature-scroll"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="feature-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Partner with us for expert support that helps you scale, stand out, and succeed — all through a simple subscription.
      </motion.h2>

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

        <motion.div
          className="feature-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li
                key={index}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <span className="checkmark" />
                {feature.text}
              </li>
            ))}
          </ul>

          <motion.div
            className="feature-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
          
          <GetStartedFlowCustomBtn />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
