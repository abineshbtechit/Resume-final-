import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export default function ProfileSidebar({ compact = false }) {
  return (
    <aside className={`profile-sidebar ${compact ? 'profile-sidebar--compact' : ''}`}>
      <div className="profile-sidebar__avatarWrap">
        <img
          className="profile-sidebar__avatar"
          src="/src/assets/profile-avatar.svg"
          alt="Abinesh A S avatar"
        />
      </div>
      <h1>{profile.name}</h1>
      <p className="profile-sidebar__role">{profile.role}</p>

      <div className="profile-sidebar__cards">
        <div className="profile-sidebar__infoCard">
          <Phone size={18} />
          <span>{profile.phone}</span>
        </div>
        <div className="profile-sidebar__infoCard">
          <MapPin size={18} />
          <span>{profile.location}</span>
        </div>
        <div className="profile-sidebar__infoCard">
          <Mail size={18} />
          <span>{profile.email}</span>
        </div>
      </div>

      <div className="profile-sidebar__socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <Github size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email Abinesh A S">
          <Mail size={18} />
        </a>
      </div>
    </aside>
  );
}