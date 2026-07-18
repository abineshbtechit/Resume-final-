import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="page-stack page-animate">
      <div className="content-shell content-shell--contact">
        <SectionTitle title="Contact Me" />

        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              I&apos;m always open to discussing software projects,
              internships, collaboration opportunities,
              AI solutions, and creative ideas.
              Let&apos;s connect and build something useful together.
            </p>

            <div className="contact-copy__grid">
              <div className="contact-info">
                <MapPin size={18} />
                <div>
                  <strong>Location</strong>
                  <span>{profile.location}</span>
                </div>
              </div>

              <div className="contact-info">
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </div>
              </div>

              <div className="contact-info">
                <Phone size={18} />
                <div>
                  <strong>Phone</strong>
                  <span>{profile.phone}</span>
                </div>
              </div>
            </div>

            <div className="profile-sidebar__socials profile-sidebar__socials--contact">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}