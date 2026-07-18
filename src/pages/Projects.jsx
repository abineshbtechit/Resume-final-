import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectLaunchDialog from "../components/ProjectLaunchDialog";
import { projects } from "../data/projects";

const filters = ["All Projects", "Web", "Mobile App", "Python", "AI / ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [launchProject, setLaunchProject] = useState(null);
  const firstProjectSlug = projects[0]?.slug;

  const handleOpenLiveApp = (project) => {
    if (project.slug === firstProjectSlug) {
      setLaunchProject(project);
      return;
    }

    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        project.type.toLowerCase().includes(activeFilter.toLowerCase()),
    );
  }, [activeFilter]);

  return (
    <section className="page-stack page-animate">
      <div className="portfolio-filter">
        <div className="portfolio-filter__header">
          <SectionTitle title="Portfolio" />
          <span className="portfolio-filter__subtitle">
            Explore my work by technology
          </span>
        </div>

        <div
          className="filter-pills"
          role="tablist"
          aria-label="Project filters"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpenLiveApp={handleOpenLiveApp} />
        ))}
      </div>

      <ProjectLaunchDialog project={launchProject} onClose={() => setLaunchProject(null)} />
    </section>
  );
}
