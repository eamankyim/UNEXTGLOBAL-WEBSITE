import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingImpactSection.css';

// Icon imports
import iconTrophy from '../../images/icons/trophy.svg';
import iconGraph from '../../images/icons/graph.svg';
import iconStar from '../../images/icons/star.svg';
import iconCamera from '../../images/icons/camera.svg';
import iconMoney from '../../images/icons/money.svg';
import iconLogoTest from '../../images/icons/logo-test.svg';
import iconBounce from '../../images/icons/bounce.svg';
import iconFollowers from '../../images/icons/followers.svg';

const cards = [
  {
    icon: iconTrophy,
    title: 'Your chatbot handled 80% of customer queries',
    description: 'Let’s fine-tune responses for even higher satisfaction',
  },
  {
    icon: iconGraph,
    title: 'Traffic spike after your last blog post: +67%',
    description: 'That topic hit — let’s write a follow-up',
  },
  {
    icon: iconStar,
    title: 'NPS score increased to 8.7',
    description: 'Your customer experience is improving',
  },
  {
    icon: iconCamera,
    title: 'Your reels reach is now 15k+ per post',
    description: 'Short-form video is working for you.',
  },
  {
    icon: iconMoney,
    title: 'You made GHC87,000.00 profit this week',
    description: 'This is 500% increase compared to last week',
  },
  {
    icon: iconLogoTest,
    title: 'New logo test outperformed old one by 3x',
    description: 'You’re building stronger visual recognition',
  },
  {
    icon: iconBounce,
    title: 'Your bounce rate dropped 18%',
    description: 'Your new content strategy is working',
  },
  {
    icon: iconFollowers,
    title: 'Followers up by 800 this week',
    description: 'Let’s introduce a loyalty push or campaign',
  },
];

const FloatingCard = ({ card, index, hidden, onRef }) => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current && onRef) onRef(index, cardRef);
  }, [cardRef]);

  return (
    <motion.div
      ref={cardRef}
      className={`unext-floating-card card-${index + 1}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.4 },
        y: {
          duration: 4 + Math.random() * 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
      style={{
        pointerEvents: hidden ? 'none' : 'auto',
      }}
      whileHover={{
        scale: 1.03,
        rotate: -1,
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={card.icon} alt="Icon" />
      <div className="unext-card-text">
        <strong>{card.title}</strong>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
};

const MobileCard = ({ card }) => (
  <motion.div
    className="unext-floating-card"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    <img src={card.icon} alt="Icon" />
    <div className="unext-card-text">
      <strong>{card.title}</strong>
      <p>{card.description}</p>
    </div>
  </motion.div>
);

const FloatingImpactSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const cardRefs = useRef([]);
  const [hiddenCards, setHiddenCards] = useState(Array(cards.length).fill(false));

  const handleRef = (index, ref) => {
    cardRefs.current[index] = ref;
  };

  const isColliding = (r1, r2) => {
    return !(
      r1.right < r2.left ||
      r1.left > r2.right ||
      r1.bottom < r2.top ||
      r1.top > r2.bottom
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (!paused) {
        timeoutRef.current = setTimeout(() => {
          setCurrentCard((prev) => (prev + 1) % cards.length);
        }, 4000);
      }
      return () => clearTimeout(timeoutRef.current);
    } else {
      const checkCollisions = () => {
        for (let i = 0; i < cardRefs.current.length; i++) {
          if (hiddenCards[i]) continue;
          const rect1 = cardRefs.current[i]?.current?.getBoundingClientRect();
          for (let j = i + 1; j < cardRefs.current.length; j++) {
            if (hiddenCards[j]) continue;
            const rect2 = cardRefs.current[j]?.current?.getBoundingClientRect();
            if (rect1 && rect2 && isColliding(rect1, rect2)) {
              setHiddenCards((prev) => {
                const updated = [...prev];
                updated[j] = true;
                return updated;
              });
              setTimeout(() => {
                setHiddenCards((prev) => {
                  const updated = [...prev];
                  updated[j] = false;
                  return updated;
                });
              }, 10000);
            }
          }
        }
      };

      const interval = setInterval(checkCollisions, 1000);
      return () => clearInterval(interval);
    }
  }, [isMobile, currentCard, paused, hiddenCards]);

  return (
    <div className="unext-serviceshero-wrapper">
      <section className="unext-floating-section">
        <div className="unext-floating-bg" />
        <div className="unext-floating-content">
          <h2>
            Smart, strategic, and <span className="unext-highlight">built to scale.</span>
          </h2>
          <p>
            Explore the key areas we support — all designed to grow your business from S to S
          </p>

          {isMobile ? (
            <div
              className="unext-floating-single-card"
              onClick={() => setPaused((prev) => !prev)}
            >
              <AnimatePresence mode="wait">
                <MobileCard key={currentCard} card={cards[currentCard]} />
              </AnimatePresence>
            </div>
          ) : (
            <div className="unext-floating-cards">
              {cards.map((card, index) => (
                <FloatingCard
                  key={index}
                  card={card}
                  index={index}
                  hidden={hiddenCards[index]}
                  onRef={handleRef}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FloatingImpactSection;
