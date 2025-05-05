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
        "UNEXT is your all-in-one business growth partner — offering branding, strategy, tech, training, and consulting through a simple subscription model.",
    },
    {
      question: "Who is UNext for?",
      answer:
        "We’re built for SMEs at any stage — from fresh startups to growing brands ready to scale.",
    },
    {
      question: "Why the name UNext?",
      answer:
        "Because our mission is to help <strong>U</strong> become the <strong>NEXT</strong> big thing — with bold ideas, smart tools, and strategic execution.",
    },
    {
      question: "What makes you different?",
      answer:
        "We combine expert teams across multiple fields under one roof — providing end-to-end support, trusted partnerships, and scalable solutions that grow with you.",
    },
  ],
  "Getting started": [
    {
      question: "How do I get started?",
      answer:
        "Just book a discovery call or message us on WhatsApp. We’ll learn about your goals and recommend the right plan for your business.",
    },
    {
      question: "Can you help register my business?",
      answer:
        "Absolutely. We work closely with the Registrar General’s Department to set up your business legally and correctly.",
    },
    {
      question: "Do I need a brand before joining?",
      answer:
        "Not at all. If you don’t have a brand guide yet, we’ll create one for you — complete with logo, voice, colors, and usage rules.",
    },
    {
      question: "What do you need from me to begin?",
      answer:
        "Just your business goals, vision, and a little time to meet. We’ll handle the rest from onboarding to execution.",
    },
  ],
  "Plans & pricing": [
    {
      question: "What plans do you offer?",
      answer:
        "<strong>Starter</strong> – GHS 3000 setup + GHS 295/mo<br><br><strong>Growth</strong> – GHS 990/mo<br><br><strong>Scale</strong> – GHS 1980/mo<br><br>We also create custom plans based on your unique needs.",
    },
    {
      question: "What’s included in each plan?",
      answer:
        "All plans cover business setup, branding, content, design, CX training, consulting, strategy, tools, and software/website builds within scope.",
    },
    {
      question: "Can I change or cancel my plan?",
      answer:
        "Yes — you can cancel anytime for the Starter Plan. For the Growth and Scale Plans, there is a minimum commitment of 6 months, as these plans don't have setup fees. You can upgrade, downgrade, or pause your plan based on your business needs.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes. If your business has unique requirements, we’ll tailor a custom plan to fit your goals.",
    },
  ],
  "Our process": [
    {
      question: "How does your process work?",
      answer:
        "We start with a discovery meeting to understand your business, where you are, and where you want to go. From there, we create a roadmap for your success. If you haven't done so already, we handle the legal setup. We get your brand identity right, define your strategies, and set up the right tools — like ClickUp and Google Workspace — to streamline your operations. Then, we continue to provide monthly support, execution, and updates, including ongoing marketing and whatever else your business needs to thrive.",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Onboarding typically takes 2–3 weeks. Once your brand guide and systems are ready, we shift into execution.",
    },
    {
      question: "What if I already have branding or systems?",
      answer:
        "No problem. We’ll assess what you have, keep what works, and upgrade the rest.",
    },
    {
      question: "Do you help with things like FDA approval?",
      answer:
        "Yes. We support product-based businesses with FDA registration, compliance, and certifications through our partner network.",
    },
  ],
  "Team & support": [
    {
      question: "How is your team structured?",
      answer:
        "Our company brings together 8 expert teams:<ul><li>Business Consulting & Compliance</li><li>Strategy & Positioning</li><li>Branding & Design</li><li>Tech & Software</li><li>Digital & Social Media</li><li>CX & UX Training</li><li>Data & Analytics</li><li>Client Success & Support</li></ul>",
    },
    {
      question: "Will I have a dedicated contact?",
      answer:
        "Yes. You’ll be matched with a dedicated business support specialist who manages your experience and coordinates with our expert teams.",
    },
    {
      question: "Is support ongoing?",
      answer:
        "Always. We’re here for the long run — not one-off projects. As your business grows, we evolve with you.",
    },
    {
      question: "How do I reach your team?",
      answer:
        "Our team is available Monday to Friday, 8AM–5PM via:<ul><li>Email</li><li>Phone</li><li>Your assigned specialist</li><li>Scheduled check-ins</li></ul>",
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