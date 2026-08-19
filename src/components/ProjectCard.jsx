import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

export function ProjectCard({
  title,
  technology,
  percentage,
  status,
  image,
  link,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="project-image"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          width="360"
          height="170"
        />
      </motion.div>

      <div className="project-content">
        <div className="project-heading">
          <div>
            <h3>{title}</h3>
            <span>{technology}</span>
          </div>

          <span
            className={`project-status ${
              status === "Completed" ? "proj-completed" : "proj-inprogress"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="project-progress">
          <div className="project-progress-track">
            <motion.div
              className="project-progress-fill"
              style={{ width: `${percentage}%` }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${percentage}%` } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <span>{percentage}%</span>
        </div>

        <motion.a
          className="project-button"
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} project - ${status}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
}
