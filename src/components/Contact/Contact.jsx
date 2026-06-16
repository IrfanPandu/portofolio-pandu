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
    icon: '📧',
    label: 'Email',
    value: 'irfanpanduutama@gmail.com',
    href: 'mailto:irfanpanduutama@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/Irfan Pandu Pratama ',
    href: 'https://www.linkedin.com/in/irfan-pandu-pratama/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/irfanPandu',
    href: 'https://github.com/IrfanPandu',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Malang, East Java',
    href: null,
  },
];

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
                  <span className="contact-card-icon">{item.icon}</span>
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
