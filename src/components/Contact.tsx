import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

function InteractiveModel() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate and follow cursor slightly
      meshRef.current.rotation.x = state.pointer.y * 0.5;
      meshRef.current.rotation.y = state.pointer.x * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.2}>
        <MeshDistortMaterial
          color="#00f3ff"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-container" style={{ alignItems: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        <span className="text-gradient">Get In Touch</span>
      </h2>

      <div style={{ 
        display: 'flex', 
        gap: '4rem', 
        width: '100%', 
        maxWidth: '1100px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        
        {/* Left Column: 3D Model & Contact Info */}
        <div style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ height: '350px', width: '100%', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ea" />
              <InteractiveModel />
            </Canvas>
          </div>

          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Email</p>
                <a href="mailto:p.j.f.pradhan@gmail.com" className="hover-target" style={{ color: 'var(--color-text-main)', fontSize: '0.95rem' }}>p.j.f.pradhan@gmail.com</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📱</span>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Mobile</p>
                <a href="tel:+919676283181" className="hover-target" style={{ color: 'var(--color-text-main)', fontSize: '0.95rem' }}>+91 9676283181</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://github.com/Prxdhxn" target="_blank" rel="noopener noreferrer" className="btn-primary hover-target" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>GitHub</a>
              <a href="https://linkedin.com/in/Pradhan-John-Francis" target="_blank" rel="noopener noreferrer" className="btn-primary hover-target" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', borderColor: 'var(--color-neon-pink)' }}>LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel" 
          style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! (Simulation)"); }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Name</label>
            <input 
              type="text" 
              required 
              className="hover-target"
              placeholder="Your Name"
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '1rem', 
                borderRadius: '8px', 
                color: 'var(--color-text-main)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'all 0.3s'
              }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email</label>
            <input 
              type="email" 
              required 
              className="hover-target"
              placeholder="your@email.com"
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '1rem', 
                borderRadius: '8px', 
                color: 'var(--color-text-main)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'all 0.3s'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Message</label>
            <textarea 
              required 
              rows={5}
              className="hover-target"
              placeholder="How can I help you?"
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                padding: '1rem', 
                borderRadius: '8px', 
                color: 'var(--color-text-main)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'all 0.3s',
                resize: 'none'
              }}
            />
          </div>

          <button type="submit" className="btn-primary hover-target" style={{ marginTop: '1rem' }}>
            Send Message 🚀
          </button>
        </motion.form>

      </div>
    </section>
  );
}
