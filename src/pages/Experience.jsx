import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <section className="experience-header">
        <div className="experience-eyebrow">Career</div>
        <h1 className="experience-title">Experience</h1>
        <p className="experience-lede">
  Five years across emergency medicine, clinical research, and now
  cloud and infrastructure work. Different fields, same discipline —
  operating under audit, controlling access to information that
  matters, and translating between the people who depend on the
  same systems.
</p>
      </section>

      <div className="experience-list">
        {experience.map((job, i) => (
          <article key={i} className="experience-card">
            <div className="experience-card-meta">
              <div className="experience-card-period">{job.period}</div>
              <div className="experience-card-location">{job.location}</div>
            </div>

            <div className="experience-card-main">
              <div className="experience-card-company">{job.company}</div>
              <h2 className="experience-card-role">{job.role}</h2>

              <ul className="experience-card-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}