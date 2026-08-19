import { motion } from "framer-motion";

export function CourseCard({
  title,
  category,
  progress,
  lessons,
  completedLessons,
  icon,
  selected,
  onSelect,
}) {
  return (
    <motion.div
      className={`course-card ${selected ? "course-card-selected" : ""}`}
      whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="course-card-header">
        <div className="course-icon">
          <img
            src={icon}
            alt={title}
            className="course-icon-image"
            loading="lazy"
            width="38"
            height="38"
          />
        </div>

        <div className="course-card-info">
          <h3>{title}</h3>
          <span>{category}</span>
        </div>

        <strong>{Math.round(progress)}%</strong>
      </div>

      <div className="course-progress-track">
        <motion.div
          className="course-progress-fill"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className="course-card-footer">
        <span>
          {completedLessons}/{lessons} lessons
        </span>

        <motion.button
          className="course-selected"
          onClick={onSelect}
          aria-label={selected ? "Deselect course" : `View ${title} course`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {selected ? "Selected" : "View Course"}
        </motion.button>
      </div>
    </motion.div>
  );
}
