import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">Seattle · Washington</div>
        <h1 className="hero-headline">
          From clinical systems to <em>cloud networks.</em>
        </h1>
        <p className="hero-lede">
          AWS-certified with hands-on labs spanning serverless architecture,
          Active Directory, and site-to-site VPN. Currently coordinating
          clinical research at Fred Hutchinson Cancer Center — building the
          network engineering chops to make the jump.
        </p>
        <div className="hero-cta-row">
          <Link to="/projects" className="hero-cta-primary">
            See the work
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <a href="/resume.pdf" download className="hero-cta-secondary">
            <Download size={16} strokeWidth={2} />
            Resume PDF
          </a>
        </div>
      </div>

      <div className="hero-photo">
  <img src="/headshot.jpg" alt="Lawrence Ngo" className="hero-photo-img" />
</div>
    </section>
  );
}