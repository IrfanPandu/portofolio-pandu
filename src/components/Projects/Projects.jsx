import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online shopping platform with cart, checkout, payment integration, and admin dashboard.',
    image: '🛒',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    color: '#6366f1',
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative project management tool with real-time updates, drag-and-drop boards, and team chat.',
    image: '📋',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    color: '#06b6d4',
  },
  {
    title: 'AI Chat Interface',
    desc: 'Beautiful chat UI that integrates with OpenAI API, supports markdown rendering and code highlighting.',
    image: '🤖',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    color: '#10b981',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio with smooth animations, dark mode, and responsive design built with React.',
    image: '💼',
    tags: ['React', 'CSS3', 'Vite'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    color: '#f59e0b',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app with geolocation, 7-day forecast, and interactive charts.',
    image: '🌤️',
    tags: ['React', 'Chart.js', 'OpenWeather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    color: '#8b5cf6',
  },
  {
    title: 'Blog CMS',
    desc: 'Headless CMS-powered blog with markdown support, SEO optimization, and comment system.',
    image: '✍️',
    tags: ['Next.js', 'MDX', 'Contentful', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    color: '#ef4444',
  },
];

const filters = ['All', 'React', 'Next.js', 'TypeScript', 'Node.js'];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visible, setVisible] = useState(false);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setVisible(true);
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
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow reveal">What I've Built</p>
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal">
          A selection of projects that showcase my skills and passion for building great software.
        </p>

        {/* Filters */}
        <div className="project-filters reveal">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              className={`project-card ${project.featured ? 'featured' : ''} reveal`}
              key={project.title}
              style={{ '--card-color': project.color, transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              {project.featured && (
                <div className="project-featured-badge">
                  <span>⭐ Featured</span>
                </div>
              )}

              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn-outline">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta reveal">
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
