export function ProjectCard({ title, technology, percentage, status }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <span className="project-technology">{technology}</span>
      <div className="project-progress">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="project-percent">{percentage}%</span>
      <span
        className={`project-status ${
          status === "Completed" ? "proj-completed" : "proj-inprogress"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
