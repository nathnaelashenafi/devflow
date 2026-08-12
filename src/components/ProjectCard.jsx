import "../index.css";

export function ProjectCard({ title, technology, percentage, status, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={`${title} preview`} />
      </div>

      <div className="project-content">
        <div className="project-heading">
          <div>
            <h3>{title}</h3>
            <span>{technology}</span>
          </div>

          <span
            className={`project-status ${
              status === "Completed" ? "proj-completed" : "proj-inprogress"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="project-progress">
          <div className="project-progress-track">
            <div
              className="project-progress-fill"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <span>{percentage}%</span>
        </div>

        <button className="project-button">View Project</button>
      </div>
    </div>
  );
}
