import { motion } from 'framer-motion';

const certificates = [
  { title: 'Object Oriented Programming', platform: 'Neocolab', date: 'Dec\'24' },
  { title: 'Computer Communications Specialization', platform: 'Coursera', date: 'Nov\'24' },
  { title: 'Digital Systems: Logic Gates to Processors', platform: 'Coursera', date: 'Oct\'24' },
  { title: 'Hardware and Operating Systems', platform: 'Coursera', date: 'Sep\'24' },
  { title: 'Responsive Web Design', platform: 'Free Code Camp', date: 'Nov\'23' }
];

export default function About() {
  return (
    <section id="about" className="section-container" style={{ alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '900px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span className="text-gradient">Professional Profile</span>
        </h2>
        
          <div className="glass-panel" style={{ position: 'relative', marginBottom: '3rem' }}>
          
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Hello! I'm **Pradhan John Francis**, a dedicated Software Engineer and Full Stack Developer with a passion for building high-end, scalable web applications. 
            Currently pursuing my B.Tech in Computer Science at Lovely Professional University, I specialize in creating immersive user experiences with a focus on rock-solid architecture.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            My technical foundation spans across multiple stacks, including robust backend development with PHP/MySQL and modern frontend engineering with React. 
            I'm constantly pushing my boundaries through real-world projects and advanced problem-solving on platforms like LeetCode and HackerRank.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Certificates Section */}
          <div className="glass-panel">
            <h3 style={{ color: 'var(--color-neon-cyan)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🏆</span> Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certificates.map((cert) => (
                <div key={cert.title} style={{ borderLeft: '2px solid rgba(0, 243, 255, 0.2)', paddingLeft: '1rem' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{cert.title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{cert.platform} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extra-Curricular Section */}
          <div className="glass-panel">
            <h3 style={{ color: 'var(--color-neon-pink)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🚀</span> Extra-Curricular
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-neon-pink)' }}>▹</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  Active participant in **Hackathons** and innovation challenges, strengthening team collaboration and real-time development skills.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-neon-pink)' }}>▹</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  Consistent practice on **HackerRank** and **LeetCode**, focusing on algorithmic thinking and data structure optimization.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
