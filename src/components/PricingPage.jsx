import { useState } from 'react';
import './PricingPage.css';

const plans = [
  {
    name: 'Starter',
    price: 'GHS 400/month',
    firstMonth: 'GHS 1400',
    highlight: 'Design tasks & brand setup',
    details: [
      'Brand discovery session',
      'Logo design + final files',
      'Color palette & fonts',
      '4 design tasks for social or marketing',
      'Monthly design tasks from month 2',
      'Email support',
      'Visual updates'
    ]
  },
  {
    name: 'Growth',
    price: 'GHS 1000/month',
    firstMonth: 'GHS 2400',
    highlight: 'Design + dev + strategy',
    details: [
      'Everything in Starter Plan',
      'Landing page design + dev setup',
      'Copywriting for key messaging',
      'One-page strategy guide',
      '6 tasks/month from month 2',
      'Social media content planning',
      'Website updates',
      'Monthly review call'
    ]
  },
  {
    name: 'Scale',
    price: 'GHS 2000+/month',
    firstMonth: 'GHS 5000+',
    highlight: 'Full-stack growth systems',
    details: [
      'Everything in Growth Plan',
      'Product strategy workshop',
      'Prototype or MVP build',
      'CRM or analytics setup',
      'CX & onboarding design',
      'Growth strategy support',
      'Dedicated specialist',
      'Slack + phone support'
    ]
  }
];

export default function PricingPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="pricing-page">
      <div className="pricing-header">
        <h1>Simple, Transparent Pricing Built for Growing Brands</h1>
        <p>From startup kits to full-scale growth systems, pick the plan that suits your next move.</p>
      </div>

      <div className="pricing-table">
        {plans.map((plan, i) => (
          <div className={`plan-card ${expanded === i ? 'expanded' : ''}`} key={plan.name}>
            <div className="plan-top">
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
              <p className="highlight">{plan.highlight}</p>
              <button onClick={() => setExpanded(expanded === i ? null : i)}>
                {expanded === i ? 'Hide Details' : 'How It Works →'}
              </button>
            </div>

            {expanded === i && (
              <div className="plan-details">
                <h4>First Month: {plan.firstMonth}</h4>
                <ul>
                  {plan.details.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pricing-cta">
        <h3>Not sure which plan is right for you?</h3>
        <p>Let’s talk. We’ll help you choose the best option based on your goals.</p>
        <button className="cta-button">Let’s Talk →</button>
      </div>
    </section>
  );
}
