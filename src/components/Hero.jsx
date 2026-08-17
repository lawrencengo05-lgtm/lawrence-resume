import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">Seattle · Washington</div>
        <h1 className="hero-headline">
       Where clinical research meets <em>AI governance.</em>
        </h1>
        <p className="hero-lede">
  Four years operationalizing HIPAA, IRB, and FDA compliance across 10+
  concurrent oncology trials. Recently led an institution-approved
  generative AI governance pilot applying the NIST AI RMF and ISO/IEC
  42001. Pursuing IAPP AIGP alongside AWS Solutions Architect and
  Security+ work. Looking for roles in AI governance, responsible AI
  deployment, and GRC.
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