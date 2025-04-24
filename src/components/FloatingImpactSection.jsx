import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './FloatingImpactSection.css';

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

const FloatingCard = ({ card, index, hidden, onRef }) => {
  const controls = useAnimation();
  const cardRef = useRef();

  useEffect(() => {
    const animate = () => {
      controls.start('float');
    };
    animate();
    const interval = setInterval(animate, 2000);
    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    if (cardRef.current) onRef(index, cardRef);
  }, [cardRef]);

  <motion.div
  ref={cardRef}
  className={`floating-card card-${index + 1}`}
  animate={{
    opacity: hidden ? 0 : 1,
    scale: hidden ? 0.8 : 1,
  }}
  transition={{
    duration: 1.5,
    ease: 'easeOut',
  }}
  style={{
    pointerEvents: hidden ? 'none' : 'auto',
  }}
>
  <img src={card.icon} alt="Icon" />
  <div className="card-text">
    <strong>{card.title}</strong>
    <p>{card.description}</p>
  </div>
</motion.div>


  return (
    <motion.div
      ref={cardRef}
      className={`floating-card card-${index + 1}`}
      animate={controls}
      initial="hidden"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        float: {
          x: Math.random() * 50 - 25,
          y: Math.random() * 50 - 25,
          transition: { duration: 1.3 + Math.random() * 1.3, ease: 'easeInOut' },
        },
      }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      onAnimationComplete={() => controls.start('visible')}
    >
      <img src={card.icon} alt="Icon" />
      <div className="card-text">
        <strong>{card.title}</strong>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
};

const FloatingImpactSection = () => {
  const cardRefs = useRef([]);
  const [hiddenCards, setHiddenCards] = useState(Array(cards.length).fill(false));

  const handleRef = (index, ref) => {
    cardRefs.current[index] = ref;
  };

  useEffect(() => {
    const checkCollisions = () => {
      for (let i = 0; i < cardRefs.current.length; i++) {
        if (hiddenCards[i]) continue;
        const rect1 = cardRefs.current[i]?.current?.getBoundingClientRect();
        for (let j = i + 1; j < cardRefs.current.length; j++) {
          if (hiddenCards[j]) continue;
          const rect2 = cardRefs.current[j]?.current?.getBoundingClientRect();
          if (rect1 && rect2 && isColliding(rect1, rect2)) {
            setHiddenCards(prev => {
              const updated = [...prev];
              updated[j] = true;
              return updated;
            });
            setTimeout(() => {
              setHiddenCards(prev => {
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
  }, [hiddenCards]);

  const isColliding = (r1, r2) => {
    return !(
      r1.right < r2.left ||
      r1.left > r2.right ||
      r1.bottom < r2.top ||
      r1.top > r2.bottom
    );
  };

  return (
    <div className='serviceshero-wrapper1'>
      <section className="floating-section">
        <div className="floating-bg" />
        <div className="floating-content">
          <h2>
            Smart, strategic, and <span className="highlight">built to scale.</span>
          </h2>
          <p>
            Explore the key areas we support — all designed to grow your business from S to S
          </p>

          <div className="floating-cards">
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
        </div>
      </section>
    </div>
  );
};

export default FloatingImpactSection;
