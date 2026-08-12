export function CourseCard({
  title,
  category,
  progress,
  lessons,
  completedLessons,
  icon: Icon,
  selected,
  onSelect,
}) {
  return (
    <div className={`course-card ${selected ? "course-card-selected" : ""}`}>
      <div className="course-card-header">
        <div className="course-icon">
          <Icon size={22} />
        </div>

        <div className="course-card-info">
          <h2>{title}</h2>
          <span>{category}</span>
        </div>

        <strong>{Math.round(progress)}%</strong>
      </div>

      <div className="course-progress-track">
        <div
          className="course-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="course-card-footer">
        <span>
          {completedLessons}/{lessons} lessons
        </span>

        <button className="course-selected" onClick={onSelect}>
          {selected ? "Selected" : "View Course"}
        </button>
      </div>
    </div>
  );
}
