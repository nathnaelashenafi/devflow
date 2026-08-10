import { useState } from "react";

export function ContinueLearning({ course }) {
  const [started, setStarted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(
    course.completedLessons,
  );

  const progress = (completedLessons / course.lessons) * 100;
  const isCompleted = completedLessons === course.lessons;
  return (
    <div className="continue-learning">
      <h2>Continue Learning</h2>

      <div className="continue-card">
        <h3>{course.title}</h3>
        <span>{course.category}</span>
        <div className="course-progress-track">
          <div
            className="course-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="continue-info">
          <span>
            {completedLessons}/{course.lessons} lessons
          </span>
          <span>{progress}%</span>
        </div>
        {isCompleted && <p>🎉 You completed this course!</p>}{" "}
        <button
          disabled={isCompleted}
          onClick={() => {
            setStarted(true);

            if (completedLessons < course.lessons) {
              setCompletedLessons((current) => current + 1);
            }
          }}
        >
          {isCompleted
            ? "Course Completed"
            : started
              ? "Learning Started"
              : "Continue Learning"}
        </button>
      </div>
    </div>
  );
}
