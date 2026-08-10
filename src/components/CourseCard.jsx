export function CourseCard({
  title,
  category,
  progress,
  lessons,
  completedLessons,
}) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <span>{category}</span>

      <div className="course-progress-track">
        <div
          className="course-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <span>
        {completedLessons}/{lessons} lessons
      </span>

      <span>{progress}%</span>
    </div>
  );
}
