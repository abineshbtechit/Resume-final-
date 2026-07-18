import { NavLink } from 'react-router-dom';

const items = [
  { label: 'ABOUT', to: '/about' },
  { label: 'RESUME', to: '/resume' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}