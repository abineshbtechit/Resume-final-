import { BriefcaseBusiness, Cloud, Code2, Smartphone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: Code2,
    title: 'Python Backend Development',
    description: 'Building secure, structured, and maintainable REST APIs using Flask and FastAPI.',
  },
  {
    icon: Smartphone,
    title: 'Frontend and Mobile Development',
    description: 'Creating responsive web interfaces with React and cross-platform mobile applications with Flutter.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'AI and Machine Learning',
    description: 'Integrating computer vision, NLP, predictive models, and intelligent features into practical applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud and Deployment',
    description: 'Deploying applications using AWS, Render, Railway, Vercel, Nginx, PostgreSQL, and production-ready workflows.',
  },
];

export default function About() {
  return (
    <section className="page-stack page-animate">
      <div className="content-shell">
        <SectionTitle title="About Me" />
        <div className="about-card">
          <p>
            I&apos;m <span>Abinesh A S</span>, a full-stack developer specializing in <span>Python Full-Stack Developer</span> with hands-on experience building web, mobile, backend, and AI-powered applications. I develop scalable backend systems using <span>Flask and FastAPI</span> and build modern interfaces using <span>React and Flutter</span>.
          </p>
          <p>
            I am particularly interested in <span>machine learning</span> integration, API development, <span>cloud deployment</span>, data-driven applications, and intelligent automation. I enjoy taking a project from the initial idea through backend development, frontend implementation, testing, deployment, and real-world usage.
          </p>
        </div>
      </div>

      <div className="content-shell">
        <SectionTitle title="What I'm Doing" />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}