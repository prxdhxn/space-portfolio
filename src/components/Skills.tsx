import { motion } from 'framer-motion';

// Clean SVG icons for each skill
const SkillIcons: Record<string, JSX.Element> = {
  JavaScript: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E" opacity="0.15"/>
      <path d="M6 6h20v20H6z" fill="none"/>
      <text x="5" y="24" fontSize="20" fontWeight="bold" fill="#F7DF1E" fontFamily="monospace">JS</text>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <rect width="32" height="32" rx="4" fill="#3178C6" opacity="0.15"/>
      <text x="3" y="24" fontSize="18" fontWeight="bold" fill="#3178C6" fontFamily="monospace">TS</text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" stroke="#68A063" strokeWidth="1.5" fill="none"/>
      <path d="M16 3v26M4 9.5l12 7 12-7" stroke="#68A063" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M16 4c-3 0-6 1-6 4v3h6v1H8C5 12 4 14 4 17s1 5 4 5h2v-4c0-2 2-3 4-3h6c2 0 4-1 4-4V8c0-3-3-4-8-4z" fill="#4B8BBE" opacity="0.7"/>
      <path d="M16 28c3 0 6-1 6-4v-3h-6v-1h8c3 0 4-2 4-5s-1-5-4-5h-2v4c0 2-2 3-4 3h-6c-2 0-4 1-4 4v4c0 3 3 4 8 4z" fill="#FFD43B" opacity="0.7"/>
      <circle cx="13" cy="8" r="1.2" fill="#4B8BBE"/>
      <circle cx="19" cy="24" r="1.2" fill="#FFD43B"/>
    </svg>
  ),
  'C++': (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <circle cx="16" cy="16" r="14" fill="#00599C" opacity="0.15"/>
      <text x="6" y="22" fontSize="16" fontWeight="bold" fill="#00599C" fontFamily="monospace">C++</text>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <circle cx="16" cy="16" r="14" fill="#A8B9CC" opacity="0.15"/>
      <text x="11" y="22" fontSize="18" fontWeight="bold" fill="#A8B9CC" fontFamily="monospace">C</text>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <ellipse cx="16" cy="16" rx="14" ry="10" fill="#777BB4" opacity="0.15"/>
      <text x="6" y="21" fontSize="14" fontWeight="bold" fill="#777BB4" fontFamily="monospace">PHP</text>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M10 24c0 2 6 2 6 2s6 0 6-2M8 20c0 2 8 2 8 2s8 0 8-2" stroke="#5382a1" strokeWidth="2"/>
      <path d="M16 4c0 0-4 4-2 8s4 4 2 8" stroke="#e76f00" strokeWidth="2"/>
    </svg>
  ),
  DSA: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1" stroke="#00f3ff" strokeWidth="1.5"/>
      <rect x="20" y="20" width="8" height="8" rx="1" stroke="#00f3ff" strokeWidth="1.5"/>
      <path d="M12 12l8 8" stroke="#00f3ff" strokeWidth="1.5" strokeDasharray="4 2"/>
    </svg>
  ),
  'HTML / CSS': (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M6 4l2 20 8 4 8-4 2-20H6z" fill="#E34F26" opacity="0.1"/>
      <path d="M16 8h6l-1 10-5 2-5-2V8h5z" stroke="#E34F26" strokeWidth="1.5"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M16 4C9 4 4 8 4 12v8c0 4 5 8 12 8s12-4 12-8v-8c0-4-5-8-12-8z" stroke="#F29111" strokeWidth="1.5" opacity="0.3"/>
      <ellipse cx="16" cy="12" rx="12" ry="4" stroke="#F29111" strokeWidth="1.5"/>
    </svg>
  ),
  VSCode: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <path d="M24 6l-18 14 6 4 16-12L24 6z" fill="#007ACC" opacity="0.7"/>
      <path d="M6 12l18 14V6L6 20v-8z" stroke="#007ACC" strokeWidth="1.5"/>
    </svg>
  ),
  XAMPP: (
    <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#FB7E14" strokeWidth="1.5" opacity="0.5"/>
      <text x="6" y="21" fontSize="12" fontWeight="bold" fill="#FB7E14">XAMPP</text>
    </svg>
  ),
};

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++',         color: '#00599C' },
      { name: 'JavaScript',  color: '#F7DF1E' },
      { name: 'C',           color: '#A8B9CC' },
      { name: 'PHP',         color: '#777BB4' },
      { name: 'Python',      color: '#4B8BBE' },
      { name: 'Java',        color: '#5382a1' },
      { name: 'DSA',         color: '#00f3ff' },
    ]
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'HTML / CSS',  color: '#E34F26' },
      { name: 'React',       color: '#61DAFB' },
      { name: 'Node.js',     color: '#68A063' },
      { name: 'TypeScript',  color: '#3178C6' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'MySQL',       color: '#F29111' },
      { name: 'VSCode',      color: '#007ACC' },
      { name: 'XAMPP',       color: '#FB7E14' },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem-Solving', color: '#ff00ea' },
      { name: 'Team Work',       color: '#00f3ff' },
      { name: 'Leadership',      color: '#ffcc00' },
      { name: 'Adaptability',    color: '#00ff88' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container" style={{ alignItems: 'initial' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center' }}
      >
        <span className="text-gradient">Professional Skills</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ color: 'var(--color-text-muted)', marginBottom: '3.5rem', textAlign: 'center', fontSize: '0.95rem' }}
      >
        My technical expertise and core competencies
      </motion.p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
      }}>
        {skillCategories.map((category, catIndex) => (
          <div key={category.title}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--color-text-main)', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {category.title}
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '1rem',
            }}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="hover-target"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.2rem 0.8rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: `1px solid rgba(255,255,255,0.05)`,
                    backdropFilter: 'blur(10px)',
                    cursor: 'none',
                    transition: 'all 0.3s',
                  }}
                  onHoverStart={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = skill.color + '44';
                    el.style.background = `${skill.color}08`;
                    el.style.boxShadow = `0 10px 30px ${skill.color}11`;
                  }}
                  onHoverEnd={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.05)';
                    el.style.background = 'rgba(255,255,255,0.02)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {SkillIcons[skill.name] ?? (
                      <div style={{ 
                        width: 24, height: 24, borderRadius: '50%', 
                        border: `2px solid ${skill.color}`, opacity: 0.6 
                      }} />
                    )}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.8)',
                    textAlign: 'center',
                    letterSpacing: '0.02em'
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
