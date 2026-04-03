import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Technology (CSE)',
    institution: 'Lovely Professional University',
    year: 'Aug\'23 – Present',
    details: 'Computer Science and Engineering | CGPA: 6.6',
    location: 'Phagwara, Punjab, India'
  },
  {
    degree: 'Intermediate',
    institution: 'Narayana Jr College',
    year: 'Jun\'21 – Mar\'23',
    details: 'Percentage: 78.9%',
    location: 'Visakhapatnam, Andhra Pradesh'
  },
  {
    degree: 'Matriculation',
    institution: 'Timpany Senior Secondary School',
    year: 'Apr\'11 - Mar\'21',
    details: 'Percentage: 100%',
    location: 'Visakhapatnam, Andhra Pradesh'
  }
];

export default function Education() {
  return (
    <section id="education" className="section-container" style={{ alignItems: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        <span className="text-gradient">Academic Background</span>
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', textAlign: 'center' }}>
        My educational journey and qualifications
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px' }}>
        {education.map((item, index) => (
          <motion.div
            key={item.degree + item.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-panel hover-target"
            style={{ cursor: 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)' }}>{item.degree}</h3>
              <span style={{ color: 'var(--color-neon-pink)', fontWeight: 600, fontSize: '0.9rem' }}>{item.year}</span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--color-neon-cyan)', fontWeight: 500, marginBottom: '0.2rem' }}>{item.institution}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.location}</p>
            </div>

            <div style={{ 
              padding: '0.6rem 1rem', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '6px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'inline-block'
            }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{item.details}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
