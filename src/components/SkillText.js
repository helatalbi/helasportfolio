"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../components/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import './SkillText.css'; // Importation du fichier CSS

const SkillText = () => {
  return (
    <div className="skill-text-container">
    

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="main-text"
      >
        Making apps with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="secondary-text"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText;
