import "../index.css";

export function ProgressBar({ subject, percentage, icon }) {
  return (
    <div className="progress">
      <div className="tech-icon">
        <img src={icon} alt={subject} className="tech-icon-image" />
      </div>
      <span className="prog-subject">{subject}</span>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="prog-percent">{percentage}%</span>
    </div>
  );
}
