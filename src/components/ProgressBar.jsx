import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

export function ProgressBar({ subject, percentage, icon }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="progress"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="tech-icon">
        <img
          src={icon}
          alt={subject}
          className="tech-icon-image"
          loading="lazy"
          width="32"
          height="32"
        />
      </div>

      <span className="prog-subject">{subject}</span>

      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <motion.span
        className="prog-percent"
        animate={{ scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {percentage}%
      </motion.span>
    </motion.div>
  );
}
