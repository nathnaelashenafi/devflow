import "../index.css";
export function ProgressBar({ subject, percentage, icon }) {
  return (
    <div className="progress">
      <div className={`tech-icon ${icon}`}>{subject.charAt(0)}</div>
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
