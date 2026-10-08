import { ExternalLink, Github, Linkedin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const isMobileProject = project?.type === 'mobile';
  const isHospitalTokenBooking = project?.slug === 'hospital-token-booking';

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <section className="page-stack page-animate">
      <div className="content-shell content-shell--details">
        <SectionTitle title={project.title} />
        <div className="project-detail-grid">
          <div className="project-detail-card">
            <div className="project-detail-copyx">
              <p className="project-detail-copy__eyebrow">{project.category}</p>
              <p>{project.detail?.overview}</p>

              <div className="detail-section">
                <h3>Features</h3>
                <ol>
                  {project.detail?.features?.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ol>
              </div>

              <div className="detail-section">
                <h3>Tools & Technologies</h3>
                <div className="project-card__tags project-card__tags--detail">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h3>Architecture Summary</h3>
                <p>{project.detail?.architecture}</p>
              </div>

              <div className="detail-section">
                <h3>Screenshots</h3>
                <div className={`detail-gallery ${isMobileProject ? 'detail-gallery--mobile' : ''}`}>
                  {(project.detail?.gallery || [project.detail?.screenshot || project.media]).map((image, index) => (
                    <div className="detail-gallery__item" key={`${project.slug}-${index}`}>
                      <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {isHospitalTokenBooking && project.detail?.video ? (
                <div className="detail-section">
                  <h3>Demo Video</h3>
                  <div className="detail-video-shell detail-video-shell--tablet">
                    <video
                      className="detail-video-shell__video"
                      src={project.detail.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate noremoteplayback"
                    />
                  </div>
                </div>
              ) : null}

              <div className="project-card__actions project-card__actions--detail">
                {project.liveUrl ? (
                  <a
                    className="btn btn--primary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    className="btn btn--ghost"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Show on GitHub
                  </a>
                ) : null}
                <a
                  className="btn btn--secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>

              {/* <div className="detail-section">
                <h3>Screenshots</h3>
                <div className="detail-screenshots">
                  <img src={project.detail?.screenshot || project.media} alt={`${project.title} screenshot`} />
                  {project.detail?.embeddedUrl ? (
                    <iframe title={`${project.title} live preview`} src={project.detail.embeddedUrl} loading="lazy" />
                  ) : null}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
