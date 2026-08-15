import { FolderKanban } from "lucide-react";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { projects } from "../data/projects";

export function Projects() {
  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <div>
          <h1>My Projects</h1>
          <p>Build, track, and showcase the projects I have worked on.</p>
        </div>

        <div className="projects-page-icon">
          <FolderKanban size={22} />
        </div>
      </div>

      <div className="projects-stats">
        <div className="projects-stat">
          <span>Total Projects</span>
          <strong>{projects.length}</strong>
        </div>

        <div className="projects-stat">
          <span>Completed</span>
          <strong>{completedProjects}</strong>
        </div>

        <div className="projects-stat">
          <span>In Progress</span>
          <strong>{inProgressProjects}</strong>
        </div>
      </div>

      <ProjectsGrid projects={projects} />
    </div>
  );
}
