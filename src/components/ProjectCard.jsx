import { ArrowUpRight, Github, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="content-shell__dots content-shell__dots--left" aria-hidden="true" />
      <div className="content-shell__dots content-shell__dots--right" aria-hidden="true" />
      <div className="project-card__header">
        <div>
          <p className="project-card__year">{project.year}</p>
          {project.featured ? <span className="badge">Featured</span> : null}
          <h3>{project.title}</h3>
          <p className="project-card__category">{project.category}</p>
        </div>
        <div className="project-card__media">
          {project.mediaType === 'video' ? (
            <video src={project.media} muted playsInline preload="metadata" poster="/src/assets/videos/hospital-token-booking.mp4" />
          ) : (
            <img src={project.media} alt={`${project.title} preview`} />
          )}
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.liveUrl ? (
          <a className="btn btn--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {project.mediaType === 'video' ? <PlayCircle size={16} /> : <ArrowUpRight size={16} />}
            {project.mediaType === 'video' ? 'Play Demo' : 'Open Live App'}
          </a>
        ) : null}
        <Link className="btn btn--secondary" to={`/projects/${project.slug}`}>
          View Details
        </Link>
        {project.githubUrl ? (
          <a className="btn btn--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}