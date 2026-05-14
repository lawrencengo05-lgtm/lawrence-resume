import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import './PageLayout.css';

export default function PageLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="layout-header">
        <Link to="/" className="layout-brand" onClick={closeMenu}>
          <div className="layout-brand-eyebrow">Cloud engineer</div>
          <div className="layout-brand-name">Lawrence Ngo</div>
        </Link>

        <nav className="layout-nav-desktop">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a href="/resume.pdf" download className="layout-resume-cta">
          Resume ↓
        </a>

        <button
          className="layout-menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </header>

      <div className={`layout-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="layout-nav-mobile">
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/insights" onClick={closeMenu}>Insights</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <a href="/resume.pdf" download className="layout-nav-mobile-cta" onClick={closeMenu}>
            Resume ↓
          </a>
        </nav>
      </div>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <div className="footer-inner">
          <span>© 2026 Lawrence Ngo</span>
          <span>·</span>
          <span>Seattle, WA</span>
          <span>·</span>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/lawrence-ngo-aka0086/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}