import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'TravelBook',
    desc: 'A comprehensive travel booking and itinerary planning website that allows users to discover destinations, book accommodations, and manage their trips.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/IrfanPandu/travelbook',
    demo: 'https://travelbook-demo.vercel.app',
  },
  {
    title: 'Finance Flow',
    desc: 'A modern personal finance and expense tracking application with detailed reports, budgeting tools, and interactive data visualization.',
    tags: ['React', 'Chart.js', 'Firebase', 'CSS Grid'],
    github: 'https://github.com/IrfanPandu/finance-flow',
    demo: 'https://finance-flow-demo.vercel.app',
  },
  {
    title: 'Project Title',
    desc: 'Project description goes here. Describe the features, technology stack, and purpose of your project.',
    tags: ['React', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
];

function getProjectIcon(title) {
  switch (title) {
    case 'Finance Flow':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'TravelBook':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
  }
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow reveal">What I've Built</p>
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal">
          A selection of projects that showcase my skills and passion for building great software.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="proj-card reveal"
              key={project.title}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image / Icon container */}
              <div className="proj-card-icon-wrapper">
                <span className="proj-card-icon">{getProjectIcon(project.title)}</span>
              </div>

              {/* Info Body */}
              <div className="proj-card-body">
                <h3 className="proj-card-title">{project.title}</h3>
                <p className="proj-card-desc">{project.desc}</p>
                <div className="proj-card-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="proj-card-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-action-link" aria-label="View Code on GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="proj-action-link" aria-label="View Live Demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta reveal">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/IrfanPandu" target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
