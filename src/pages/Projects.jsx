import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <section className="projects-header">
        <div className="projects-eyebrow">Technical work</div>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-lede">
          A working catalog of labs, builds, and deployments — each one
          documenting what I built, what I learned, and what I'd do
          differently.
        </p>
      </section>

      <div className="projects-grid">
        {projects.map((p) => (
          <Link
            to={`/projects/${p.slug}`}
            key={p.slug}
            className="projects-card"
          >
            <div className="projects-card-num">
              {p.number} / {p.category.toUpperCase()}
            </div>
            <h2 className="projects-card-title">{p.title}</h2>
            <p className="projects-card-summary">{p.summary}</p>
            <div className="projects-card-tech">
              {p.tech.join(' · ')}
            </div>
            <div className="projects-card-read">Read the build ↗</div>
          </Link>
        ))}
      </div>
    </>
  );
}