import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css"; // Include your custom styles

const HeroSection = () => {
  const slides = [
    {
      text: "Empowering Your Growth",
      description:
        "We help you find growth opportunities, refine strategies, and scale your business — whether you're rebranding or starting fresh.",
      image: "images/slide1.png",
    },
    {
      text: "Strategy That Scales",
      description:
        "Our consultants identify key growth channels tailored to your brand’s goals and stage of development.",
      image: "images/slide2.png",
    },
    {
      text: "Design Meets Execution",
      description:
        "From sleek branding to robust platforms — we bring ideas to life with smart tech and sharp visuals.",
      image: "images/slide3.png",
    },
    {
      text: "Tailored Solutions, Real Results",
      description:
        "Every business is unique. That’s why our solutions adapt to your needs — not the other way around.",
      image: "images/slide4.png",
    },
    {
      text: "Partnering for Long-Term Success",
      description:
        "We’re more than a service — we’re your growth partner, helping you reach new heights over time.",
      image: "images/slide5.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
    <div className="slider-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="slide active"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="typewriter">{slides[currentSlide].text}</h1>
            <p>{slides[currentSlide].description}</p>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
  
      {/* Move this outside the animation block */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default HeroSection;
