import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Zap, FolderOpen, Mail } from 'lucide-react';

const links = [
  { href: '#',        icon: Home,       label: 'Home'     },
  { href: '#about',   icon: User,       label: 'About'    },
  { href: '#skills',  icon: Zap,        label: 'Skills'   },
  { href: '#projects',icon: FolderOpen, label: 'Projects' },
  { href: '#contact', icon: Mail,       label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      let newActive = '#';
      const sections = links.map(l => l.href.substring(1)).filter(Boolean);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            newActive = `#${section}`;
          }
        }
      }
      if (window.scrollY < 100) newActive = '#';
      
      setActive(newActive);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '70px',
        background: scrolled
          ? 'rgba(5, 5, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0, 243, 255, 0.12)'
          : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <motion.img
          src="/LOGO-removebg-preview.png"
          alt="Pradhan Logo"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            height: '52px',
            width: 'auto',
            filter: 'drop-shadow(0 0 10px rgba(142, 142, 147, 0.4))',
            display: 'block',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <span style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#8E8E93',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          Pradhan
        </span>
      </a>

      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {links.map(({ href, icon: Icon, label }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className="hover-target"
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: isActive
                    ? 'rgba(0, 243, 255, 0.1)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(0, 243, 255, 0.3)'
                    : '1px solid transparent',
                  color: isActive ? 'rgba(0,243,255,1)' : 'rgba(255,255,255,0.65)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s, background 0.2s, border-color 0.2s',
                  cursor: 'pointer',
                }}
              >
                <Icon size={14} strokeWidth={1.8} />
                {label}
              </motion.div>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
