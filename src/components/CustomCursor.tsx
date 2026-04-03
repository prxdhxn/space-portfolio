import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleId = useRef(0);
  const lastPos = useRef({ x: -200, y: -200 });

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Inner dot — very snappy
  const innerX = useSpring(cursorX, { damping: 20, stiffness: 500, mass: 0.2 });
  const innerY = useSpring(cursorY, { damping: 20, stiffness: 500, mass: 0.2 });

  // Outer ring — laggy
  const outerX = useSpring(cursorX, { damping: 28, stiffness: 120, mass: 1.2 });
  const outerY = useSpring(cursorY, { damping: 28, stiffness: 120, mass: 1.2 });

  // Halo — very laggy
  const haloX = useSpring(cursorX, { damping: 35, stiffness: 60, mass: 2 });
  const haloY = useSpring(cursorY, { damping: 35, stiffness: 60, mass: 2 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > 8) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        const id = particleId.current++;
        setParticles(p => [...p.slice(-16), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setParticles(p => p.filter(pt => pt.id !== id));
        }, 600);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('button, a, input, textarea, .hover-target'));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Comet particle trail */}
      {particles.map((pt, i) => (
        <motion.div
          key={pt.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: pt.x,
            top: pt.y,
            translateX: '-50%',
            translateY: '-50%',
            width: 5 + i * 0.4,
            height: 5 + i * 0.4,
            borderRadius: '50%',
            background: `hsl(${185 + i * 9}, 100%, 68%)`,
            boxShadow: `0 0 8px hsl(${185 + i * 9}, 100%, 68%)`,
            pointerEvents: 'none',
            zIndex: 9995,
          }}
        />
      ))}

      {/* Halo — large spinning ring, very lagged */}
      <motion.div
        style={{
          position: 'fixed',
          left: haloX,
          top: haloY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9996,
        }}
        animate={{
          width: isClicking ? 48 : isHovered ? 68 : 54,
          height: isClicking ? 48 : isHovered ? 68 : 54,
          opacity: isHovered ? 1 : 0.45,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1.5px solid rgba(0,243,255,0.6)',
            borderTopColor: 'rgba(185, 0, 255, 0.9)',
            borderRightColor: 'rgba(185, 0, 255, 0.3)',
            boxShadow: '0 0 14px rgba(0,243,255,0.25)',
          }}
        />
      </motion.div>

      {/* Outer ring — medium lag */}
      <motion.div
        style={{
          position: 'fixed',
          left: outerX,
          top: outerY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9997,
          border: '1.5px solid rgba(0,243,255,0.7)',
        }}
        animate={{
          width: isClicking ? 18 : isHovered ? 36 : 26,
          height: isClicking ? 18 : isHovered ? 36 : 26,
          borderColor: isHovered ? 'rgba(185,0,255,0.9)' : 'rgba(0,243,255,0.7)',
          backgroundColor: isHovered ? 'rgba(185,0,255,0.08)' : 'transparent',
          boxShadow: isHovered
            ? '0 0 12px rgba(185,0,255,0.4)'
            : '0 0 8px rgba(0,243,255,0.2)',
        }}
        transition={{ type: 'spring', damping: 18, stiffness: 250 }}
      />

      {/* Inner dot — sharpest, fastest */}
      <motion.div
        style={{
          position: 'fixed',
          left: innerX,
          top: innerY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{
          width: isClicking ? 5 : isHovered ? 7 : 10,
          height: isClicking ? 5 : isHovered ? 7 : 10,
          backgroundColor: isHovered ? 'rgba(185,0,255,1)' : 'rgba(0,243,255,1)',
          boxShadow: isHovered
            ? '0 0 12px rgba(185,0,255,1), 0 0 28px rgba(185,0,255,0.5)'
            : '0 0 12px rgba(0,243,255,1), 0 0 28px rgba(0,243,255,0.5)',
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 600 }}
      />
    </>
  );
}
