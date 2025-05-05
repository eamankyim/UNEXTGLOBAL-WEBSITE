import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: (index) => ({
    y: index * 20,
    scale: 1 - index * 0.05,
    zIndex: -index,
  }),
  animate: {
    y: 0,
    scale: 1,
    zIndex: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
      delay: 0.1,
    },
  },
};

const CardStack = ({ cards }) => {
  return (
    <div style={cardStackStyle}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          style={{ ...cardStyle, backgroundColor: card.color }}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          custom={index}
        >
          {card.content}
        </motion.div>
      ))}
    </div>
  );
};

const cardStackStyle = {
  position: 'relative',
  width: '300px',
  height: '200px',
};

const cardStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const Example = () => {
  const cardData = [
    { color: '#333', content: 'Card 1' },
    { color: '#555', content: 'Card 2' },
    { color: '#777', content: 'Card 3' },
    { color: '#999', content: 'Card 4' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f0f0' }}>
      <CardStack cards={cardData} />
    </div>
  );
};

export default Example;