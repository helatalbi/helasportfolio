import React from "react";
import "./AboutMe.css";
import TextAnimation from "../components/TextAnimation";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const AboutMe = () => {
  const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about">
      <div className="container">
        {/* Bloc de bienvenue + image */}
        <div className="info-box">
          <motion.div variants={slideInFromTop} className="Welcome-box">
            <SparklesIcon className="SparklesIcon" />
            <h1 className="Welcome-text">Fullstack Developer Portfolio</h1>
          </motion.div>

          <div className="image-container">
            <img className="image" alt="" src="https://uiverse.io/astronaut.png" />
          </div>
        </div>

        {/* Animation de texte */}
        <div className="TextAnim">
          <TextAnimation />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
