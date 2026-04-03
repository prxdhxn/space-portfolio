import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Education for Kids Platform',
    date: 'Oct\'24 – Dec\'24',
    description: 'Engineered an interactive web-based learning platform designed to enhance engagement among children through visually rich, age-appropriate lessons, games, and quizzes. Implemented responsive and child-friendly user interfaces ensuring smooth usability across multiple devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    demo: '#',
    source: 'https://github.com/Prxdhxn',
    icon: '🎓'
  },
  {
    title: 'Sales for Houses, Land Platform',
    date: 'May\'24 – Jun\'24',
    description: 'Engineered a web-based property showcase platform to present house and land details, images, and pricing in a clear, structured, and visually appealing manner. Developed dynamic property listings with optimized filtering and search features.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    source: 'https://github.com/Prxdhxn',
    icon: '🏠'
  },
  {
    title: 'Whisper Secure',
    date: '2024 - Present',
    description: 'A high-security communication platform emphasizing end-to-end encryption and user privacy. Designed for secure, anonymous data exchange using modern cryptographic protocols.',
    tags: ['Security', 'Encryption', 'Node.js', 'React'],
    demo: '#',
    source: 'https://github.com/prxdhxn/whisper-secure',
    icon: '🔐'
  },
  {
    title: 'EduSphere',
    date: '2024',
    description: 'An interactive web-based educational platform designed to enhance student engagement through comprehensive learning modules and intuitive interfaces.',
    tags: ['Education', 'Web Platform', 'UI/UX'],
    demo: '#',
    source: 'https://github.com/prxdhxn/EduSphere',
    icon: '🌍'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        <span className="text-gradient">Featured Projects</span>
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', textAlign: 'center' }}>
        Real-world applications and digital solutions
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
        gap: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-panel hover-target"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '2rem',
              height: '100%',
              cursor: 'none'
            }}
          >
            <div style={{ 
              height: '180px', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', 
              marginBottom: '1.5rem',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ fontSize: '4rem' }}>{project.icon}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-neon-cyan)' }}>{project.title}</h3>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--color-neon-pink)', marginBottom: '1rem', fontWeight: 500 }}>
              {project.date}
            </p>

            <p style={{ flex: 1, marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.2rem 0.7rem', 
                  background: 'rgba(0, 243, 255, 0.05)', 
                  border: '1px solid rgba(0, 243, 255, 0.2)',
                  borderRadius: '12px',
                  color: 'var(--color-neon-cyan)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover-target" style={{ 
                  color: 'var(--color-text-main)', 
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span>🔗</span> Live Demo
                </a>
              )}
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="hover-target" style={{ 
                color: 'var(--color-text-muted)', 
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>📁</span> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
