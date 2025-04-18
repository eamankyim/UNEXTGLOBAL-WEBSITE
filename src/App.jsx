import React from "react";
import Header from "./components/Header";
import './App.css';
// Correct way to import (no file extension needed)
import HeroSection from './components/HeroSection';
import WhatsNextSection from "./components/WhatsNextSection";
import FeatureSection from "./components/FeatureSection";
import CardsSection from "./components/CardsSection";
import TestimonialSection from "./components/TestimonialSection";
import UareNextSection from "./components/UareNextSection";
import ContactSection from "./components/ContactSection";
import FooterSection from './components/FooterSection'; // Correct path



const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsNextSection/>
      <FeatureSection/>
      <CardsSection/>
      <TestimonialSection/>
      <UareNextSection/>
      <ContactSection/>
      <FooterSection/>
     
    
      
    
    
   
    </div>
  );
};

export default App;
