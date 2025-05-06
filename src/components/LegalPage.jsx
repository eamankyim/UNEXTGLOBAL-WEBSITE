import React, { useEffect, useState } from "react";
import "./LegalPage.css";

const legalContent = {
  terms: {
    title: "Terms of Service",
    content: `
      <p>Welcome to UNEXT. By accessing or using our services, you agree to be bound by these Terms of Service.</p>
      <h4>1. Eligibility</h4>
      <p>Our services are available to businesses legally registered in Ghana or abroad. You must be 18 years or older.</p>
      <h4>2. Subscriptions & Payments</h4>
      <p>The Starter Plan includes a one-time setup fee of GHS 3000 and a monthly fee of GHS 295. Growth and Scale Plans are billed monthly at GHS 990 and GHS 1,980 respectively with no setup fee, but require a 6-month minimum commitment.</p>
      <h4>3. Cancellation & Switching</h4>
      <p>Starter plan clients may cancel anytime. Growth and Scale plan clients must fulfill the 6-month term before canceling. You may upgrade or downgrade your plan with notice.</p>
      <h4>4. Intellectual Property</h4>
      <p>UNEXT retains rights to any frameworks, tools, or templates used. Custom work delivered is owned by the client after full payment.</p>
      <h4>5. Liability</h4>
      <p>UNEXT is not liable for indirect losses. We strive to provide great service, but results depend on external business conditions too.</p>
      <h4>6. Changes</h4>
      <p>We may update these terms. Continued use of services means acceptance of those changes.</p>
      <p>For questions, email us at info@unextglobal.com</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    content: `
      <p>This Privacy Policy explains how UNEXT collects and uses your information.</p>
      <h4>1. Information We Collect</h4>
      <p>We collect name, phone, email, business name, goals, and industry. We also use cookies for analytics.</p>
      <h4>2. Use of Data</h4>
      <p>We use your data to onboard you, deliver services, improve our offerings, and send updates.</p>
      <h4>3. Data Sharing</h4>
      <p>We do not sell your data. We may share it with third-party tools (e.g., Calendly, ClickUp) as needed to fulfill our services.</p>
      <h4>4. Security</h4>
      <p>We use secure protocols to protect your data. Access is limited to team members with a need-to-know basis.</p>
      <h4>5. Your Rights</h4>
      <p>You may request to update or delete your data by contacting us.</p>
      <p>For privacy questions, email info@unextglobal.com</p>
    `
  },
  policy: {
    title: "Support & Service Policy",
    content: `
      <p>Our goal is to ensure you get consistent and quality support across all our services.</p>
      <h4>1. Support Availability</h4>
      <p>We’re available Monday–Friday, 8AM–5PM (GMT). Reach us via email, phone, or your assigned specialist.</p>
      <h4>2. Response Times</h4>
      <p>Most issues are responded to within 1 business day. Complex requests may take 2–3 days.</p>
      <h4>3. Deliverables</h4>
      <p>All work is scoped and scheduled based on your plan tier. Urgent needs outside the plan may attract additional fees.</p>
      <h4>4. Feedback & Reviews</h4>
      <p>We encourage regular feedback. You’ll get scheduled check-ins to review progress.</p>
    `
  }
};

const tabs = ["terms", "privacy", "policy"];

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (tabs.includes(hash)) setActiveTab(hash);
  }, []);

  const { title, content } = legalContent[activeTab];

  return (
    <div className="legal-page">
      <h1>Legal Information</h1>
      <div className="legal-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {legalContent[tab].title}
          </button>
        ))}
      </div>

      <div className="legal-content">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default LegalPage;
