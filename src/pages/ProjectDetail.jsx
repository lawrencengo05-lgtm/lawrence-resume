import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-not-found">
        <div className="project-not-found-label">Not found</div>
        <h1>That project doesn't exist</h1>
        <Link to="/projects" className="project-back-link">
          <ArrowLeft size={14} /> Back to all projects
        </Link>
      </section>
    );
  }

  return (
    <article className="project-detail">
      <Link to="/projects" className="project-back-link">
        <ArrowLeft size={14} /> All projects
      </Link>

      <header className="project-detail-header">
        <div className="project-detail-num">
          {project.number} / {project.category.toUpperCase()}
        </div>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-summary">{project.summary}</p>

        <div className="project-detail-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        {project.repoUrl && (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-detail-repo"
    >
      <ExternalLink size={14} /> View on GitHub
    </a>
  )}
      </header>

      <section className="project-section">
        <div className="project-section-eyebrow">What I built</div>
        <ul className="project-list">
          {project.built.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="project-section">
        <div className="project-section-eyebrow">What I learned</div>
        <ul className="project-list">
          {project.learned.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="project-section">
        <div className="project-section-eyebrow">What I'd do differently</div>
        <ul className="project-list">
          {project.differently.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}