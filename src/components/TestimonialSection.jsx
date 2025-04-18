import React, { useState, useEffect } from 'react';
import './TestimonialSection.css'; // Make sure the CSS file is named Testimonials.css or adjust the path accordingly

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Diana Ampem",
      position: "Chief Executive Officer",
      companyLogo: "images/company-logo.png",
      image: "images/profile.png",
      quote: "uNext helped us reposition our brand with clarity and purpose. They designed a sleek, high-converting website that aligned with our new direction — resulting in a 3× increase in online sales within just three months.",
    },
    {
      name: "Kwame Mensah",
      position: "Product Manager",
      companyLogo: "images/company-logo.png",
      image: "images/profile.png",
      quote: "We have been able to reposition our brand with clarity and purpose. They designed a sleek, high-converting website that aligned with our new direction — resulting in a 3× increase in online sales within just three months.",
    },
    {
      name: "Linda Boateng",
      position: "Manager",
      companyLogo: "images/company-logo.png",
      image: "images/profile.png",
      quote: "uNext helped us reposition our brand with clarity and purpose. They designed a sleek, high-converting website that aligned with our new direction — resulting in a 3× increase in online sales within just three months.",
    },
    {
      name: "Yaw Kusi",
      position: "Operations Lead",
      companyLogo: "images/company-logo.png",
      image: "images/profile.png",
      quote: "uNext helped us reposition our brand with clarity and purpose. They designed a sleek, high-converting website that aligned with our new direction — resulting in a 3× increase in online sales within just three months.",
    },
    {
      name: "Nana Serwaa",
      position: "Product Manager",
      companyLogo: "images/company-logo.png",
      image: "images/profile.png",
      quote: "uNext helped us reposition our brand with clarity and purpose. They designed a sleek, high-converting website that aligned with our new direction — resulting in a 3× increase in online sales within just three months.",
    },
  ];

  const goToTestimonialSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section" data-aos="fade-up">
      <div className="testimonial-header">
        <h2>Success stories</h2>
        <p>Real results, real impact</p>
      </div>

      <div className="testimonial-slider">
        <div className="testimonial-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              data-aos="fade-up"
            >
              <div className="doodle-bg"></div>
              <div className="testimonial-image-group" data-aos="fade-right">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt="Client Image" />
                </div>
                <div className="testimonial-author" data-aos="fade-up" data-aos-delay="500">
                  <div className="author-chip">
                    <h4>{testimonial.name}</h4>
                    <h4>{testimonial.position}</h4>
                    <img src={testimonial.companyLogo} alt="Company Logo" className="company-logo" />
                  </div>
                </div>
              </div>
              <div className="testimonial-content" data-aos="fade-left">
                <div className="quote-text" data-aos="fade-up" data-aos-delay="300">
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER CONTROLS */}
        <div className="testimonial-controls">
          <button className="prev-slide" onClick={prevSlide}>
            <img src="images/icons/left-arrow.svg" alt="Previous Slide" />
          </button>
          <button className="next-slide" onClick={nextSlide}>
            <img src="images/icons/right-arrow.svg" alt="Next Slide" />
          </button>
        </div>

        {/* DOTS NAVIGATION */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonialSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
