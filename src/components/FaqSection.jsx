import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqIcon from "/images/icons/faq.svg";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./FaqSection.css";


const faqData = {
  General: [
    {
      question: "What is UNext?",
      answer:
        "UNEXT is your growth partner — providing branding, strategy, consulting, tech solutions, CX training, and more under one subscription-based model.",
    },
    {
      question: "Who is UNext for?",
      answer:
        "Small to medium businesses at any stage — from startups to scaling brands.",
    },
    {
      question: "Why the name UNext?",
      answer:
        "Because we’re here to help <strong>YOU</strong> become the <strong>NEXT</strong> big thing — through smart strategies, bold branding, and powerful tools.",
    },
    {
      question: "What makes you different?",
      answer:
        "We combine multiple expert teams under one roof, partner with governing bodies and tech giants, and offer full-stack support — from S to S (Structure to Strategy).",
    },
  ],
  "Getting Started": [
    {
      question: "How do I begin?",
      answer:
        "Book a discovery call or WhatsApp us. We’ll learn about your goals, then match you with the right plan and team.",
    },
    {
      question: "Can you help me register my business?",
      answer:
        "Yes. We work closely with the Registrar General’s Department to get your business legally set up.",
    },
    {
      question: "Do I need a brand before joining?",
      answer:
        "Nope. If you don’t have a brand guide, we’ll build one for you — including logo, colors, voice, and usage rules.",
    },
    {
      question: "What do you need from me to start?",
      answer:
        "Just your business vision, goals, and time for an onboarding session. We’ll guide you the rest of the way.",
    },
  ],
  "Plans & Pricing": [
    {
      question: "What plans do you offer?",
      answer:
        "<strong>Starter</strong> – GHS 400/mo<br><br><strong>Growth</strong> – GHS 700/mo<br><br><strong>Scale</strong> – GHS 1200/mo<br><br>Each plan starts with a setup phase (e.g., GHS 1400 for Starter Month 1).",
    },
    {
      question: "What’s included in the plans?",
      answer:
        "Branding, business setup, consulting, content, design, CX training, strategy, tools, and custom software/website builds (within scope).",
    },
    {
      question: "Can I switch or cancel anytime?",
      answer:
        "Yes. You can upgrade, downgrade, or pause depending on your business needs.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes — especially for businesses with unique requirements. Let's talk.",
    },
  ],
  "Our Process": [
    {
      question: "What’s your typical workflow?",
      answer:
        "<ul><li>Discovery & business goals</li><li>Branding & legal setup</li><li>Tool setup (ClickUp, Google Workspace, etc.)</li><li>Strategy & business planning</li><li>Monthly support and execution</li></ul>",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Usually 2–3 weeks. Once your brand guide and tools are set, we move into execution.",
    },
    {
      question: "What if I already have branding or tools?",
      answer:
        "We’ll review and work with what you have, or upgrade where needed.",
    },
    {
      question: "Do you help with compliance like FDA?",
      answer:
        "Yes. For product-based businesses, we help you navigate FDA approval and other compliance needs through our partnerships.",
    },
  ],
  "Team & Support": [
    {
      question: "How is your team structured?",
      answer:
        "We operate as one company, powered by 8 specialized teams:<ul><li>Business Consulting & Compliance</li><li>Strategy & Positioning</li><li>Branding & Design</li><li>Tech & Software</li><li>Digital & Social Media</li><li>CX & UX Training</li><li>Data & Analytics</li><li>Client Success & Support</li></ul>",
    },
    {
      question: "Will I have a dedicated person?",
      answer:
        "Yes. Every client gets a dedicated business support specialist and access to our expert teams as needed.",
    },
    {
      question: "Is support really ongoing?",
      answer:
        "Absolutely. We don’t drop projects and disappear — we stick with you as your business evolves.",
    },
    {
      question: "How do I communicate with your team?",
      answer:
        "We’re available Monday–Friday, 8AM–5PM via:<ul><li>Email</li><li>Phone</li><li>Your assigned specialist</li><li>Scheduled check-ins</li></ul>",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FaqSection = () => {
  const categories = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <motion.section
      className="faq-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="faq-header" variants={itemVariants}>
        <img src={faqIcon} alt="FAQ Icon" className="faq-icon" />
        <h2>Frequently Asked Questions</h2>
        <p>
          Got questions? We've got answers. Here’s everything you need to know
          before getting started with <strong>uNext</strong>.
        </p>
      </motion.div>

      <motion.div className="faq-tabs" variants={itemVariants}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`faq-tab ${activeTab === cat ? "active" : ""}`}
            onClick={() => {
              setActiveTab(cat);
              setOpenIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div className="faq-list" variants={containerVariants}>
        {faqData[activeTab].map((item, index) => (
          <motion.div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            variants={itemVariants}
            onClick={() => toggleOpen(index)}
          >
            <div className="faq-question">
              {item.question}
              {openIndex === index ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="faq-footer" variants={itemVariants}>
        <p>
          Still curious? 🗨️{" "}
          <span className="talk-link"><a href="https://wa.me/233209735525?text=Hello%20Unext%2C%20I%27m%20interested%20in%20your%20services."
              rel="noopener noreferrer"
              target="_blank" className="talk-link">Let’s talk </a></span> — we’re ready when you
          are.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default FaqSection;