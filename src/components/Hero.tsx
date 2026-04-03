import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../../pictures/profile.PNG';

const TITLES = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-container" style={{ flexDirection: 'row', alignItems: 'center' }}>
      
      {/* Left Axis: Text & Actions */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ flex: 1, paddingRight: '2rem' }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-neon-cyan)' }}>Hi, I'm</h2>
        <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1.2 }}>Pradhan John Francis</h1>
        
        <h3 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '1.5rem', 
          color: 'var(--color-text-muted)', 
          fontWeight: 300,
          position: 'relative',
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ position: 'absolute', whiteSpace: 'nowrap' }}
            >
              {TITLES[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </h3>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          I build high-end, scalable web applications with a focus on immersive user experiences and rock-solid architecture.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn-primary hover-target">View My Work</a>
          <button className="btn-primary hover-target" style={{ borderColor: 'var(--color-neon-pink)' }} onClick={() => {
            const modal = document.getElementById('resume-modal') as any;
            if (modal) modal.showModal();
          }}>Resume</button>
        </div>
      </motion.div>

      {/* Right Axis: Animated Profile Ring */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
      >
        <div style={{ position: 'relative', width: '300px', height: '300px' }}>
          {/* Glowing Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-10%', left: '-10%',
              width: '120%', height: '120%',
              borderRadius: '50%',
              border: '2px dashed var(--color-neon-violet)',
              boxShadow: '0 0 20px var(--color-neon-violet)',
            }}
          />
          {/* Inner orbit */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '0%', left: '0%',
              width: '100%', height: '100%',
              borderRadius: '50%',
              borderTop: '3px solid var(--color-neon-cyan)',
              borderBottom: '3px solid var(--color-neon-pink)',
            }}
          />
          {/* Avatar Container */}
          <div style={{
            position: 'absolute',
            top: '5%', left: '5%',
            width: '90%', height: '90%',
            borderRadius: '50%',
            background: 'var(--color-bg-navy)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.1)'
          }}>
            <img 
              src={profilePic} 
              alt="Pradhan" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
}
