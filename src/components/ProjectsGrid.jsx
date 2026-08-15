import { ProjectCard } from "./ProjectCard";
import "../index.css";

export function ProjectsGrid({ projects }) {
  return (
    <div className="projects-section">
      <h2>Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              technology={project.technology}
              percentage={project.percentage}
              status={project.status}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}
