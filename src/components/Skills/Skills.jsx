import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#6366f1',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 65 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    title: 'Tools & Other',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Figma', level: 82 },
      { name: 'Docker', level: 60 },
      { name: 'Vite / Webpack', level: 75 },
      { name: 'Jest / Testing', level: 70 },
    ],
  },
];

const techStack = [
  { name: 'React', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '💙' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Tailwind', emoji: '🌊' },
  { name: 'GraphQL', emoji: '🔺' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Figma', emoji: '🎨' },
  { name: 'Git', emoji: '🌿' },
  { name: 'Vite', emoji: '⚡' },
  { name: 'Jest', emoji: '🃏' },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bars
            const bars = entry.target.querySelectorAll('.skill-bar-fill');
            bars.forEach(bar => {
              bar.style.width = bar.dataset.width;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow reveal">What I Work With</p>
        <h2 className="section-title reveal">My Skills</h2>
        <p className="section-subtitle reveal">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              className="skill-card reveal"
              key={i}
              style={{ '--card-color': cat.color, transitionDelay: `${i * 0.1}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-width={`${skill.level}%`}
                        style={{ width: '0%', '--bar-color': cat.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="tech-stack-section reveal">
          <p className="tech-stack-label">Tech Stack</p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <div className="marquee-item" key={i}>
                  <span className="marquee-emoji">{tech.emoji}</span>
                  <span className="marquee-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
