'use client';
import { motion } from 'framer-motion';
import './CardsSection.css';
import {
  Brush,
  Globe,
  Smile,
  Laptop,
  LineChart,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const cardData = [
  {
    icon: <ShieldCheck className="lucide-icon" />,
    title: 'Market Positioning & Strategy',
    description:
      'We help define your unique market position with tailored strategies that align with your goals and drive meaningful growth.',
  },
  {
    icon: <Brush className="lucide-icon" />,
    title: 'Branding & Design',
    description:
      'From logos to full brand systems, we craft identities that connect, inspire, and leave a lasting impression.',
  },
  {
    icon: <Laptop className="lucide-icon" />,
    title: 'Smart Software & AI Solutions',
    description:
      'We build smart tools and platforms that boost productivity, simplify processes, and harness the power of AI for real business impact.',
  },
  {
    icon: <LineChart className="lucide-icon" />,
    title: 'Business Consulting',
    description:
      'From startup to scale-up, we bring clarity and expertise to your operations, helping you make informed decisions and progress.',
  },
  {
    icon: <Globe className="lucide-icon" />,
    title: 'Digital Presence & Social Media',
    description:
      'We manage and grow your online presence with content strategies that engage, convert, and keep your brand top-of-mind.',
  },
  {
    icon: <Smile className="lucide-icon" />,
    title: 'Customer Experience (CX)',
    description:
      'We train your team and equip you with tools to create meaningful, consistent customer experiences that drive loyalty and growth.',
  },
];

export default function CardsSection() {
  return (
    <section className="cards-section">
      <motion.h2
        className="cards-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Smart, strategic, and built to scale — explore what we do best.
      </motion.h2>

      <div className="cards-grid">
        {cardData.map((card, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#" className="see-how">
              See how <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
