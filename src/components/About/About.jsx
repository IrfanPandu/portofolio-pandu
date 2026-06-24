import { useEffect, useRef } from 'react';
import './About.css';
import profilePhoto from '../../assets/foto jas pandu.png';

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
      role: 'Network Engineering',
      company: 'SMKN 1 Kediri',
      period: '2021 – 2024',
      desc: 'I studied at SMKN 1 Kediri majoring in computer network engineering ',
      color: '#3aadf9ff',
    },
    {
      role: 'Fullstack Developer',
      company: 'Freelance',
      period: '2023 – Present',
      desc: 'I have experience in a freelance fullstack developer',
      color: '#6366f1',
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
                <img src={profilePhoto} alt="Profile" className="about-photo" />
              </div>
              <div className="about-image-bg"></div>
            </div>

            <div className="about-info-cards">
              <div className="info-card">
                <span className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Malang, East Java</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </span>
                <div>
                  <p className="info-label">Education</p>
                  <p className="info-value">Informatics Engineering</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </span>
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
