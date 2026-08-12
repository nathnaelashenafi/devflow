import { ProgressBar } from "./ProgressBar";
import "../index.css";
export function LearningProgress({ progress }) {
  return (
    <div className="progress-bar">
      <h2 className="prog-title">Learning Progress</h2>
      <div className="progress-cont">
        {progress.map((prog) => {
          return (
            <ProgressBar
              key={prog.id}
              subject={prog.subject}
              percentage={prog.percentage}
              icon={prog.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
