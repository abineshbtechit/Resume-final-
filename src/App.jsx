import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  const location = useLocation();
  const isDetails = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';

  return (
    <div className="app-shell">
      <div className="app-shell__grid" aria-hidden="true" />
      <div className="app-shell__inner">
        <ProfileSidebar compact={isDetails} />
        <div className="app-shell__main">
          <Navbar />
          <main className="main-stage">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}