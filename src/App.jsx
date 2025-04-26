// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import FooterSection from './components/FooterSection';
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="MainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;