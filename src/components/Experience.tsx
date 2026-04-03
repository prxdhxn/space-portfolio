import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Java and Java Full Stack Development',
    company: 'Current Training',
    date: 'Present',
    description: 'Comprehensive training focused on Java Full Stack development to build robust, scalable, and highly optimized web applications.',
    highlights: [
      'Developing end-to-end full stack web applications with a strong emphasis on backend architecture.',
      'Integrating databases and managing server-side logic using modern Java frameworks and tools.',
      'Enhancing overall website quality, performance, and user experience through advanced development patterns.'
    ],
    tech: 'Java, Spring Boot, SQL, HTML, CSS, JavaScript'
  },
  {
    role: 'UI/UX Design with Figma',
    company: 'Training & Certification',
    date: 'May\'24 – Jun\'24',
    description: 'Hands-on training focused on user interface and user experience design methodologies, specifically using Figma.',
    highlights: [
      'Designed and wireframed prototype applications to help visualize and construct effective digital products.',
      'Created interactive, high-fidelity mockups establishing clear user journeys and workflows.',
      'Applied principles of visual hierarchy, typography, and layout optimization to design real-world apps.'
    ],
    tech: 'Figma, UI/UX Principles, Wireframing, Prototyping'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        <span className="text-gradient">Training & Experience</span>
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', textAlign: 'center' }}>
        Professional growth and practical implementations
      </p>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Timeline Axis */}
        <div style={{ 
          position: 'absolute', 
          top: 0, bottom: 0, left: '20px', 
          width: '2px', 
          background: 'linear-gradient(to bottom, var(--color-neon-cyan), var(--color-neon-pink))',
          opacity: 0.5 
        }} />

        {experience.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ position: 'relative', paddingLeft: '60px', marginBottom: '3rem' }}
          >
            {/* Timeline Node */}
            <div style={{
              position: 'absolute', left: '14px', top: '5px',
              width: '14px', height: '14px',
              borderRadius: '50%',
              background: 'var(--color-neon-cyan)',
              boxShadow: '0 0 10px var(--color-neon-cyan)'
            }} />

            <div className="glass-panel" style={{ cursor: 'none' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-neon-cyan)', marginBottom: '0.2rem' }}>{item.role}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--color-text-main)' }}>{item.company}</span>
                <span style={{ color: 'var(--color-neon-pink)', fontWeight: 500 }}>{item.date}</span>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                {item.highlights.map((highlight, i) => (
                  <li key={i} style={{ 
                    color: 'var(--color-text-muted)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.5,
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <span style={{ color: 'var(--color-neon-cyan)' }}>▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div style={{ 
                padding: '0.8rem 1.2rem', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>Tools: </span>
                <span style={{ color: 'var(--color-text-muted)' }}>{item.tech}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
