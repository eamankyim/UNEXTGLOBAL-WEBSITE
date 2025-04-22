// Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import WhatsNextSection from "../components/WhatsNextSection";
import FeatureSection from "../components/FeatureSection";
import CardsSection from "../components/CardsSection";
import TestimonialSection from "../components/TestimonialSection";
import UareNextSection from "../components/UareNextSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatsNextSection />
      <FeatureSection />
      <CardsSection />
      <TestimonialSection />
      <UareNextSection />
      <ContactSection />
    </>
  );
};

export default Home;