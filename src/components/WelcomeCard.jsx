import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import background from "../../images/doodle.png";
import logo from "../../images/icons/unex-logo.svg";
import giftIcon from "../../images/icons/gift.svg";
import "./WelcomeCard.css";

const WelcomeCard = () => {
  const navigate = useNavigate();

  const handleClaimClick = () => {
    navigate("/discount");
  };

  return (
    <motion.div
      className="GiftContainer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="welcome-card"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.div
          className="welcome-content"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="welcome-top-text">Welcome to</p>
          <motion.img
            src={logo}
            alt="Unext Logo"
            className="welcome-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          />

          <h2 className="welcome-heading">🎉 You’re officially part of the movement</h2>
          <p className="welcome-subtext">
            Thanks for supporting <strong>UNEXT Global</strong>. We’re building something bold, and you’re on the inside track
          </p>

          <motion.button
            className="welcome-button"
            onClick={handleClaimClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Claim my gift <img src={giftIcon} alt="Gift" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;
