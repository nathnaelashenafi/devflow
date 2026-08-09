import "../index.css";
export function ProgressBar({ subject, percentage }) {
  return (
    <div className="progress">
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
