import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2023 – Present',
      desc: 'Led the frontend architecture for a SaaS platform serving 50k+ users.',
      color: '#6366f1',
    },
    {
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2022 – 2023',
      desc: 'Built responsive web apps with React and integrated RESTful APIs.',
      color: '#06b6d4',
    },
    {
      role: 'UI Developer Intern',
      company: 'DigitalAgency',
      period: '2021 – 2022',
      desc: 'Designed and developed landing pages and e-commerce frontends.',
      color: '#f59e0b',
    },
  ];

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow reveal">Get To Know Me</p>
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">
         Passionate about building scalable web applications with clean code and thoughtful user experiences.
        </p>

        <div className="about-grid">
          {/* Left – Image & quick info */}
          <div className="about-left reveal">
            <div className="about-image-wrapper">
              <div className="about-image">
                <span className="about-avatar">👨‍💻</span>
              </div>
              <div className="about-image-bg"></div>
            </div>

            <div className="about-info-cards">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Malang, East Java</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">🎓</span>
                <div>
                  <p className="info-label">Education</p>
                  <p className="info-value">Informatics Engineering</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">💼</span>
                <div>
                  <p className="info-label">Status</p>
                  <p className="info-value info-available">Open to Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Bio & Experience */}
          <div className="about-right">
            <div className="about-bio reveal">
              <h3>Who I Am</h3>
              <p>
                I'm <strong>Irfan Pandu</strong>, a fullstack developer with 2 years of experience turning complex problems
                into elegant, user-friendly solutions. I specialize in building modern web applications with React,
                TypeScript, and thoughtful UI design.
              </p>
              <p>
                Beyond code, I'm passionate about open-source, design systems, and developer experience. I believe
                great software is built at the intersection of engineering and empathy.
              </p>
              <a
                href="/resume.pdf"
                className="btn btn-primary about-resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
            </div>

            {/* Timeline */}
            <div className="experience-section reveal">
              <h3>Experience</h3>
              <div className="timeline">
                {experiences.map((exp, i) => (
                  <div className="timeline-item" key={i} style={{ '--accent-color': exp.color }}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <div>
                          <h4 className="timeline-role">{exp.role}</h4>
                          <p className="timeline-company">{exp.company}</p>
                        </div>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <p className="timeline-desc">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
