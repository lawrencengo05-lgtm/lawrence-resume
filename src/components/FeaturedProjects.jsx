import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <div>
          <div className="featured-projects-eyebrow">Featured work</div>
          <h2 className="featured-projects-title">Technical projects</h2>
        </div>
        <Link to="/projects" className="featured-projects-all">
          All projects →
        </Link>
      </div>

      <div className="featured-projects-grid">
        {featured.map((p) => (
          <Link
            to={`/projects/${p.slug}`}
            key={p.slug}
            className="project-card"
          >
            <div className="project-card-num">
              {p.number} / {p.category.toUpperCase()}
            </div>
            <h3 className="project-card-title">{p.title}</h3>
            <div className="project-card-tech">
              {p.tech.slice(0, 4).join(' · ')}
            </div>
            <div className="project-card-read">Read the build ↗</div>
          </Link>
        ))}
      </div>
    </section>
  );
}