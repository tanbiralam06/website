'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ className }) => {
  // Animation variants
  const logoVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(79, 70, 229, 0)'
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(79, 70, 229, 1)',
      transition: {
        default: { duration: 1.8, ease: "easeInOut" },
        fill: { duration: 1.5, ease: [1, 0, 0.8, 1], delay: 0.5 }
      }
    }
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 1 
      } 
    }
  };

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-10 w-10"
      >
        {/* SVG Logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-600 dark:text-primary-400"
        >
          <motion.path
            d="M20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={logoVariants}
            custom={1}
            className="origin-center transform dark:text-primary-400"
          />
          <motion.path
            d="M12 20L17 25L28 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { 
                pathLength: 1, 
                opacity: 1, 
                transition: { 
                  delay: 1, 
                  duration: 1,
                  ease: "easeInOut" 
                } 
              }
            }}
          />
        </svg>
        
        {/* Circular glow */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-primary-500/30 dark:bg-primary-500/20 blur-md -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <motion.span 
        className="text-lg font-bold text-secondary-900 dark:text-white"
        variants={textVariants}
      >
        ReacUI
      </motion.span>
    </motion.div>
  );
};

export default AnimatedLogo; 