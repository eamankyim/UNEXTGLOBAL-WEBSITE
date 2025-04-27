import React from 'react';
import HowItWorksModalStarter from './HowItWorksModalStarter';
import HowItWorksModalGrowth from './HowItWorksModalGrowth';
import HowItWorksModalScale from './HowItWorksModalScale';

import GetStartedStarter from './GetStartedStarter';


import './PricingSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import GetStartedFlow2 from './GetStartedFlow2';

const PricingSection = () => {
  return (
    <div className='pricing-wrapper'>
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>Simple, strategic pricing for <span>serious brands</span></h2>
          <p>
            From startup-ready brand kits to full-scale growth systems,
            <br />our plans are designed to support you at every stage.
          </p>
        </div>

        <div className="pricing-cards">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="pricing-subtitle">Perfect for small businesses or personal brands starting out</p>
            <h4 className="pricing-price">GHS 300/month</h4>
            <div className="pricing-features">
              <FeatureItem text="Brand discovery session" />
              <FeatureItem text="Logo design + brand manual" />
              <FeatureItem text="Social media starter kit (bio, banners, 4 templates)" />
              <FeatureItem text="Business card + Letterhead + Flyers" />
              <FeatureItem text="Company email setup + signature" />
              <FeatureItem text="Brand strategy & positioning basics" />
              <FeatureItem text="Free templates (invoices, proposals)" />
              <FeatureItem text="Social media accounts setup" />
              <h5>Ongoing monthly support</h5>
              <FeatureItem text="5 social media posts/month (design + content)" />
              <FeatureItem text="Branding add-ons (Small tweaks, extensions)" />
              <FeatureItem text="Social media management (light support)" />
              <FeatureItem text="Priority email support" />
              <FeatureItem text="Business guidance" />
            </div>
            <div className="pricing-buttons">
            <HowItWorksModalStarter />
            <GetStartedStarter />
           
            </div>
          </div>

          {/* Growth Plan */}
          <div className="pricing-card featured">
            <div className="pricing-badge">Most popular</div>
            <h3>Growth</h3>
            <p className="pricing-subtitle">Ideal for businesses ready to grow online with more polish & tools</p>
            <h4 className="pricing-price">GHS 1000/month</h4>
            <div className="pricing-features">
              <FeatureItem text="Everything in Starter" />
              <FeatureItem text="Full brand strategy & positioning document" />
              <FeatureItem text="Messaging & tone guide" />
              <FeatureItem text="Google Workspace setup" />
              <FeatureItem text="Newsletter platform setup" />
              <FeatureItem text="CRM/Contact forms (e.g. Notion, Tally)" />
              <FeatureItem text="Social profile optimization" />
              <FeatureItem text="Company onboarding documents" />
              <FeatureItem text="Website training + handover kit" />
              <FeatureItem text="Website setup (up to 5 pages + blog option)" />
              <h5>Ongoing monthly support</h5>
              <FeatureItem text="8 social media posts/month (design + content)" />
              <FeatureItem text="Branding add-ons (Small tweaks, extensions)" />
              <FeatureItem text="1 animated story or reel/month" />
              <FeatureItem text="1 motion ad per month" />
              <FeatureItem text="Monthly strategy check-ins" />
              <FeatureItem text="Newsletter assistance" />
              <FeatureItem text="Basic website updates" />
            </div>
            <div className="pricing-buttons">
            <HowItWorksModalGrowth />
            <GetStartedFlow2 />
            </div>
          </div>

          {/* Scale Plan */}
          <div className="pricing-card">
            <h3>Scale</h3>
            <p className="pricing-subtitle">For growing brands that need advanced content, automation & insights</p>
            <h4 className="pricing-price">GHS 2000/month</h4>
            <div className="pricing-features">
              <FeatureItem text="Everything in Growth" />
              <FeatureItem text="Content strategy playbook" />
              <FeatureItem text="Brand ambassador/media kit" />
              <FeatureItem text="Campaign landing pages" />
              <FeatureItem text="Advanced SEO (blog, speed, technical)" />
              <FeatureItem text="Referral or loyalty program framework" />
              <FeatureItem text="Analytics dashboard (Looker Studio, Notion)" />
              <FeatureItem text="2 short-form video ads/reels" />
              <FeatureItem text="Seasonal marketing kits (Valentine’s, Public holidays, etc.)" />
              <h5>Ongoing monthly support</h5>
              <FeatureItem text="12 social media posts/month (design + content)" />
              <FeatureItem text="Full social media management" />
              <FeatureItem text="Monthly analytics reporting" />
              <FeatureItem text="Web content updates" />
              <FeatureItem text="Monthly strategy check-ins" />
              <FeatureItem text="Ongoing SEO optimization" />
              <FeatureItem text="Newsletter assistance" />
              <FeatureItem text="Quarterly growth strategy session" />
              <FeatureItem text="2 short-form video ads/reels" />
            </div>
            <div className="pricing-buttons">
            <HowItWorksModalScale />
              <button className="btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="feature-item">
    <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
    <span>{text}</span>
  </div>
);

export default PricingSection;
