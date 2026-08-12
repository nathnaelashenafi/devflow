export function ContinueLearning({ course, onProgressUpdate }) {
  const progress = course.progress;
  const isCompleted = course.completedLessons === course.lessons;

  return (
    <div className="continue-learning">
      <div className="section-heading">
        <div>
          <h2>Continue Learning</h2>
          <p>Pick up where you left off.</p>
        </div>

        <span>{Math.round(progress)}% complete</span>
      </div>

      <div className="continue-card">
        <div className="continue-header">
          <div className="continue-icon">
            <span>▶</span>
          </div>

          <div className="continue-title">
            <h3>{course.title}</h3>
            <span>{course.category}</span>
          </div>
        </div>

        <div className="continue-progress">
          <div className="course-progress-track">
            <div
              className="course-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="continue-info">
            <span>
              {course.completedLessons}/{course.lessons} lessons
            </span>

            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {isCompleted && (
          <p className="course-completed-message">
            🎉 You completed this course!
          </p>
        )}

        <button
          className="continue-button"
          disabled={isCompleted}
          onClick={() => onProgressUpdate(course.id)}
        >
          {isCompleted ? "Course Completed" : "Complete Lesson"}
        </button>
      </div>
    </div>
  );
}
