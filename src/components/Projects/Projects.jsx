import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'ToDoList',
    type: 'Freelance',
    typeColor: '#f59e0b',
    desc: 'A sleek, intuitive task management app built with Laravel and PostgreSQL that streamlines daily productivity through seamless task tracking and smart organization.',
    highlights: [
      'JWT-based auth with role management',
      'Dynamic itinerary builder with drag-and-drop',
      'MongoDB Atlas for flexible destination data',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/IrfanPandu/toDoList',
    demo: 'https://to-do-list-irfanpandus-projects.vercel.app/',
    demoLabel: 'Live Demo',
    githubLabel: 'View Code',
  },
  {
    title: 'Finance Flow',
    type: 'Freelance',
    typeColor: '#f59e0b',
    desc: 'A modern personal finance tracker with interactive data visualization, monthly budgeting tools, and category-based expense reporting. Built to help users build better financial habits.',
    highlights: [
      'Interactive Chart.js dashboards with real-time updates',
      'Budget alerts & recurring expense tracking',
      'Firebase Auth + Firestore for instant sync',
    ],
    tags: ['React', 'Chart.js', 'Firebase', 'CSS Grid'],
    github: 'https://github.com/IrfanPandu/finance-flow',
    demo: 'https://finance-flow-demo.vercel.app',
    demoLabel: 'Live Demo',
    githubLabel: 'View Code',
  },
  {
    title: 'Business Landing Page',
    type: 'Freelance',
    typeColor: '#f59e0b',
    desc: 'Designed and developed a high-converting landing page for a local UMKM client. Focused on performance, mobile responsiveness, and clear call-to-action flows to increase customer inquiries.',
    highlights: [
      'Google PageSpeed score 95+ on mobile',
      'WhatsApp CTA integration for direct lead capture',
      'Deployed on custom domain with SSL',
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    github: null,
    demo: null,
    demoLabel: null,
    githubLabel: 'Private · Client Work',
  },
  {
    title: 'Product Catalog & Order System',
    type: 'Freelance',
    typeColor: '#f59e0b',
    desc: 'Built a full-stack product catalog and order management system for a local business. Includes an admin dashboard for inventory management, order tracking, and customer data export.',
    highlights: [
      'Role-based admin panel with CRUD operations',
      'PDF order receipt generation',
      'REST API backend with Express.js + MySQL',
    ],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    github: null,
    demo: null,
    demoLabel: null,
    githubLabel: 'Private · Client Work',
  },
  {
    title: 'Architect Jobstreet',
    type: 'Academic',
    typeColor: '#06b6d4',
    desc: 'A job board platform specifically designed for the architecture industry, developed as a team academic project. Features include job listings, applicant profiles, and a company review system.',
    highlights: [
      'Multi-role system: Employer & Job Seeker',
      'Dockerized deployment with PHP backend',
      'Responsive UI built with React',
    ],
    tags: ['React', 'PHP', 'JavaScript', 'Docker', 'MySQL'],
    github: 'https://github.com/Raditfiransah/Architecture-JobStreet',
    demo: null,
    demoLabel: null,
    githubLabel: 'View Code',
  },
];

function getProjectIcon(type) {
  switch (type) {
    case 'Freelance':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'Academic':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
          A selection of projects spanning freelance client work, personal builds, and academic collaborations.
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
                <span className="proj-card-icon">{getProjectIcon(project.type)}</span>
              </div>

              {/* Info Body */}
              <div className="proj-card-body">
                <div className="proj-card-title-row">
                  <h3 className="proj-card-title">{project.title}</h3>
                  <span
                    className="proj-type-badge"
                    style={{ '--badge-color': project.typeColor }}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="proj-card-desc">{project.desc}</p>

                {/* Highlights */}
                <ul className="proj-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>
                      <span className="highlight-dot">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="proj-card-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="proj-card-actions">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="proj-action-link" aria-label="View Code on GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>{project.githubLabel}</span>
                    </a>
                  ) : (
                    <span className="proj-action-private">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>{project.githubLabel}</span>
                    </span>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="proj-action-link" aria-label="View Live Demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>{project.demoLabel}</span>
                    </a>
                  )}
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
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
