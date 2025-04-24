import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WiggleCardSection.css';

const cards = [
  {
    icon: 'images/icons/trophy.svg',
    title: 'Your chatbot handled 80% of customer queries',
    description: 'Let’s fine-tune responses for even higher satisfaction',
  },
  {
    icon: 'images/icons/graph.svg',
    title: 'Traffic spike after your last blog post: +67%',
    description: 'That topic hit — let’s write a follow-up',
  },
  {
    icon: 'images/icons/star.svg',
    title: 'NPS score increased to 8.7',
    description: 'Your customer experience is improving',
  },
  {
    icon: 'images/icons/camera.svg',
    title: 'Your reels reach is now 15k+ per post',
    description: 'Short-form video is working for you.',
  },
  {
    icon: 'images/icons/money.svg',
    title: 'You made GHC87,000.00 profit this week',
    description: 'This is 500% increase compared to last week',
  },
  {
    icon: 'images/icons/logo-test.svg',
    title: 'New logo test outperformed old one by 3x',
    description: 'You’re building stronger visual recognition',
  },
  {
    icon: 'images/icons/bounce.svg',
    title: 'Your bounce rate dropped 18%',
    description: 'Your new content strategy is working',
  },
  {
    icon: 'images/icons/followers.svg',
    title: 'Followers up by 800 this week',
    description: 'Let’s introduce a loyalty push or campaign',
  },
];

const WiggleCardSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="unext-wiggle-wrapper">
      <div className="unext-wiggle-inner">
        <h2>
          Smart, strategic, and <span className="unext-highlight">built to scale.</span>
        </h2>
        <p>
          Explore the key areas we support — all designed to grow your business from S to S
        </p>

        <div className="unext-wiggle-card-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              className="unext-wiggle-card"
              initial={{ opacity: 0, x: 60, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: [3, -3, 3, 0] }}
              exit={{ opacity: 0, x: -60, rotate: 3 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  setCurrentCard((prev) => (prev + 1) % cards.length);
                } else if (info.offset.x > 50) {
                  setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
                }
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <img src={cards[currentCard].icon} alt="Icon" />
              <div className="unext-card-text">
                <strong>{cards[currentCard].title}</strong>
                <p>{cards[currentCard].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WiggleCardSection;
