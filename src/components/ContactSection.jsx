import React from "react";
import "./ContactSection.css";
import emailIcon from "/images/icons/email.svg";
import phoneIcon from "/images/icons/phone.svg";
import clockIcon from "/images/icons/clock.svg";
import locationIcon from "/images/icons/location.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-wrapper">
        {/* Left Column */}
        <div className="contact-content" data-aos="fade-right" data-aos-delay="100">
          <h2 className="contact-heading">
            Got questions?<br /><span>Let’s talk</span>
          </h2>
          <p className="contact-description">
            We’re always excited to hear about new ideas, challenges and goals. <br />
            Reach out — let’s make it happen.
          </p>
        </div>

        {/* Right Column */}
        <div className="contact-info" data-aos="fade-left" data-aos-delay="200">
          <div className="contact-info-item">
            <img src={emailIcon} alt="email icon" className="contact-icon" />
            <p><strong>Email:</strong> info@unextglobal.com</p>
          </div>

          <div className="contact-info-item">
            <img src={phoneIcon} alt="phone icon" className="contact-icon" />
            <p><strong>Phone:</strong> +233 591 859 037</p>
          </div>

          <div className="contact-info-item">
            <img src={clockIcon} alt="hours icon" className="contact-icon" />
            <p><strong>Hours:</strong> Mon – Fri, 8AM – 5PM</p>
          </div>

          <div className="contact-info-item">
            <img src={locationIcon} alt="location icon" className="contact-icon" />
            <p><strong>Location:</strong> Bredan Street, East Legon. Accra - Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
