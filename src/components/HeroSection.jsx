import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const slides = [
    {
      text: "Empowering Your Growth",
      description:
        "We help you find growth opportunities, refine strategies, and scale your business — whether you're rebranding or starting fresh.",
      image: "images/slide1.png",
      headingColor: "#1a237e", // dark blue
      descriptionColor: "#3949ab", // lighter blue
    },
    {
      text: "Strategy That Scales",
      description:
        "Our consultants identify key growth channels tailored to your brand’s goals and stage of development.",
      image: "images/slide2.png",
      headingColor: "#e65100", // deep orange
      descriptionColor: "#ff8f00", // lighter orange
    },
    {
      text: "Design Meets Execution",
      description:
        "From sleek branding to robust platforms — we bring ideas to life with smart tech and sharp visuals.",
      image: "images/slide3.png",
      headingColor: "#00695c", // teal
      descriptionColor: "#26a69a", // lighter teal
    },
    {
      text: "Building the app your customers",
      description:
        ". That’s why our solutions adapt to your needs — not the other way around.",
      image: "images/slide4.png",
      headingColor: "#ffffff", // white
      descriptionColor: "#c8e6c9", // light greenish
    },
    {
      text: "Partnering for Long-Term Success",
      description:
        "We’re more than a service — we’re your growth partner, helping you reach new heights over time.",
      image: "images/slide5.png",
      headingColor: "#1b5e20", // dark green
      descriptionColor: "#66bb6a", // medium green
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="slider-wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            className="slide active"
            style={{
              background: [
                "linear-gradient(to bottom, #ffffff, #C3E3E4)",
                "linear-gradient(to bottom, #fff3e0, #ffd180)",
                "linear-gradient(to bottom, #eefafc, #97d8e0)",
                "linear-gradient(to bottom, rgb(3, 128, 20), rgb(9, 64, 36))",
                "linear-gradient(to bottom, #e5f1e5, #95cf98)",
              ][currentSlide],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) {
                nextSlide();
              } else if (info.offset.x > 100) {
                prevSlide();
              }
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="typewriter"
                style={{ color: slides[currentSlide].headingColor }}
              >
                {slides[currentSlide].text}
              </h1>
              <p
                style={{ color: slides[currentSlide].descriptionColor }}
              >
                {slides[currentSlide].description}
              </p>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
