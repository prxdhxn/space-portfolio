import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // We map the scroll progress (0 to 1) directly to CSS top property 0% to 100%
  const topPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div style={{
      position: 'fixed',
      left: '30px',
      top: '20vh',
      bottom: '20vh',
      width: '2px',
      background: 'rgba(0, 243, 255, 0.1)',
      zIndex: 50,
      borderRadius: '2px',
      pointerEvents: 'none'
    }}>
      {/* The glowing orb that moves down the line */}
      <motion.div style={{
        position: 'absolute',
        left: '-7px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: 'var(--color-neon-cyan)',
        boxShadow: '0 0 15px var(--color-neon-cyan), 0 0 30px var(--color-neon-cyan)',
        top: topPosition,
        marginTop: '-8px' // perfectly center it on the percentage
      }} />
    </div>
  );
}
