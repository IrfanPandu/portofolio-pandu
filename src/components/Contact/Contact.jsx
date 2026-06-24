import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── EmailJS Config ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_arn6wt7';
const EMAILJS_TEMPLATE_ID = 'template_aouejpm'; // ganti dengan Template ID kamu
const EMAILJS_PUBLIC_KEY  = 'gXMnTqZmAgZ2xbLdv';  // ganti dengan Public Key kamu
// ─────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    label: 'Email',
    value: 'irfanpanduutama@gmail.com',
    href: 'mailto:irfanpanduutama@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/Irfan Pandu Pratama',
    href: 'https://www.linkedin.com/in/irfan-pandu-pratama/',
  },
  {
    label: 'GitHub',
    value: 'github.com/irfanPandu',
    href: 'https://github.com/IrfanPandu',
  },
  {
    label: 'Location',
    value: 'Malang, East Java',
    href: null,
  },
];

function getContactIcon(label) {
  switch (label) {
    case 'Email':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'Location':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSending(false);
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setSending(false);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow reveal">Let's Work Together</p>
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="section-subtitle reveal">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <div className="contact-grid">
          {/* Left – Info */}
          <div className="contact-info reveal">
            <div className="contact-info-header">
              <h3>Let's Talk</h3>
              <p>
                I'm currently available for freelance projects and full-time opportunities.
                Whether it's a startup product, a side project, or just a chat — reach out!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((item, i) => (
                <div className="contact-card" key={i}>
                  <span className="contact-card-icon">{getContactIcon(item.label)}</span>
                  <div className="contact-card-info">
                    <p className="contact-card-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-card-value" target="_blank" rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-card-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <div className="availability-dot"></div>
              <div>
                <p className="availability-title">Available for new projects</p>
                <p className="availability-sub">Typical response time: 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="contact-form-wrapper reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry / Just Saying Hi"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="form-alert form-alert-success">
                  <span>✅</span> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert form-alert-error">
                  <span>❌</span> Oops! Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                {sending ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
