import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import FooterSection from './components/FooterSection';
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import LegalPage from "./components/LegalPage";
import Gift from "./pages/Gift";
import Discount from "./pages/Discount";

const LayoutWrapper = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const hideHeader = path === "/gift" || path === "/discount";
const hideFooter = path === "/gift" || path === "/discount";

  return (
    <div className="MainContainer">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/legalPage" element={<LegalPage />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
      {!hideFooter && <FooterSection />}
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
};

export default App;
