import { motion } from "framer-motion";

export function ContinueLearning({ course, onProgressUpdate }) {
  const progress = course.progress;
  const isCompleted = course.completedLessons === course.lessons;

  return (
    <motion.div
      className="continue-learning"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-heading">
        <div>
          <h2>Continue Learning</h2>
          <p>Pick up where you left off.</p>
        </div>

        <span>{Math.round(progress)}% complete</span>
      </div>

      <motion.div
        className="continue-card"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <div className="continue-header">
          <motion.div
            className="continue-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span>▶</span>
          </motion.div>

          <div className="continue-title">
            <h3>{course.title}</h3>
            <span>{course.category}</span>
          </div>
        </div>

        <div className="continue-progress">
          <div className="course-progress-track">
            <motion.div
              className="course-progress-fill"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <div className="continue-info">
            <span>
              {course.completedLessons}/{course.lessons} lessons
            </span>

            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {isCompleted && (
          <motion.p
            className="course-completed-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            🎉 You completed this course!
          </motion.p>
        )}

        <motion.button
          className="continue-button"
          disabled={isCompleted}
          onClick={() => onProgressUpdate(course.id)}
          aria-label={
            isCompleted
              ? "Course completed"
              : `Complete next lesson in ${course.title}`
          }
          whileHover={!isCompleted ? { scale: 1.02 } : {}}
          whileTap={!isCompleted ? { scale: 0.98 } : {}}
        >
          {isCompleted ? "Course Completed" : "Complete Lesson"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
