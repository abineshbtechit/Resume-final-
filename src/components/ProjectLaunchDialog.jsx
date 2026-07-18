import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function ProjectLaunchDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  const previewSource = project.detail?.screenshot || project.media;

  return (
    <div className="project-launch-modal" onClick={onClose} role="presentation">
      <div className="project-launch-modal__backdrop" aria-hidden="true" />
      <section
        className="project-launch-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-launch-title"
        aria-describedby="project-launch-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="project-launch-modal__close" type="button" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <div className="project-launch-modal__media">
          {project.mediaType === 'video' ? (
            <video src={project.media} muted playsInline preload="metadata" />
          ) : (
            <img src={previewSource} alt={`${project.title} preview`} />
          )}
        </div>

        <div className="project-launch-modal__content">
          <div className="project-launch-modal__metaRow">
            <span className="project-launch-modal__year">{project.year}</span>
            <span className="project-launch-modal__category">{project.category}</span>
          </div>

          <h3 id="project-launch-title">{project.title}</h3>
          <p id="project-launch-description" className="project-launch-modal__description">
            {project.detail?.overview || project.description}
          </p>

          <div className="project-launch-modal__stack">
            <p className="project-launch-modal__label">Tech Stack</p>
            <div className="project-card__tags project-card__tags--detail">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="project-launch-modal__actions">
            <a
              className="btn btn--primary project-launch-modal__launch"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live App
              <ArrowUpRight size={16} />
            </a>
            <button className="btn btn--secondary project-launch-modal__dismiss" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}