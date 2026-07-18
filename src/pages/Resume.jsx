import { ExternalLink, GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TimelineCard from '../components/TimelineCard';
import SkillCard from '../components/SkillCard';
import { certifications, education, experience, publication, skills } from '../data/experience';

export default function Resume() {
  return (
    <section className="page-stack page-animate">
      <div className="content-shell content-shell--resume">
        <div className="content-shell__headerRow">
          <SectionTitle title="Resume" />
          <a className="btn btn--ghost" href="/src/assets/resume/abinesh-resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="resume-grid">
          <div>
            <div className="resume-grid__heading">
              <Briefcase size={18} />
              <h3>Experience</h3>
            </div>
            <div className="timeline-list">
              {experience.map((item) => (
                <TimelineCard key={`${item.title}-${item.period}`} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="resume-grid__heading">
              <GraduationCap size={18} />
              <h3>Education</h3>
            </div>
            <article className="detail-card">
              <h3>{education.title}</h3>
              <p className="detail-card__muted">{education.institution}</p>
              <p className="detail-card__muted">{education.grade}</p>
              <p>{education.description}</p>
            </article>

            <div className="resume-grid__heading resume-grid__heading--spaced">
              <Sparkles size={18} />
              <h3>Skills</h3>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill} label={skill} />
              ))}
            </div>

            <div className="resume-grid__heading resume-grid__heading--spaced">
              <Award size={18} />
              <h3>Certifications</h3>
            </div>
            <div className="cert-grid">
              {certifications.map((item) => (
                <article className="mini-card" key={item}>
                  {item}
                </article>
              ))}
            </div>

            <div className="resume-grid__heading resume-grid__heading--spaced">
              <Award size={18} />
              <h3>Publication</h3>
            </div>
            <article className="detail-card">
              <h3>{publication.title}</h3>
              <p>{publication.description}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}