export default function ProjectMedia({ project }) {
  if (project.mediaType === 'video') {
    return (
      <div className="project-media project-media--video">
        <video controls playsInline preload="metadata" poster="/src/assets/videos/hospital-token-booking.mp4">
          <source src={project.media} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="project-media">
      <img src={project.detail?.screenshot || project.media} alt={`${project.title} preview`} />
      {project.detail?.embeddedUrl ? (
        <iframe title={`${project.title} preview`} src={project.detail.embeddedUrl} loading="lazy" />
      ) : null}
    </div>
  );
}