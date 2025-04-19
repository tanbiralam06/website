'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ParallaxEffect = ({ children, className, depth = 20, damping = 30 }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Add spring physics
  const springX = useSpring(mouseX, { damping, stiffness: 100 });
  const springY = useSpring(mouseY, { damping, stiffness: 100 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of window size
      const x = e.clientX / windowSize.width - 0.5;
      const y = e.clientY / windowSize.height - 0.5;
      
      // Update motion values
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [windowSize, mouseX, mouseY]);

  return (
    <motion.div
      className={className}
      style={{
        x: springX.get() * depth * -1,
        y: springY.get() * depth * -1,
        rotateX: springY.get() * 5,
        rotateY: springX.get() * -5,
        transformPerspective: 1000,
      }}
      animate={{
        x: springX.get() * depth * -1,
        y: springY.get() * depth * -1,
        rotateX: springY.get() * 5,
        rotateY: springX.get() * -5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect; 