import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleScroll(e, '#home')}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Irfan Pandu</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Building beautiful web experiences, one component at a time.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              {['home', 'about', 'skills', 'projects', 'contact'].map(link => (
                <li key={link}>
                  <a href={`#${link}`} onClick={(e) => handleScroll(e, `#${link}`)}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/IrfanPandu" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/irfan-pandu-pratama/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X</a></li>
              <li><a href="mailto:irfanpanduutama@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Irfan Pandu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
