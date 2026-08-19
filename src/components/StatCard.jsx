import { motion } from "framer-motion";
import "../index.css";

export function StatCard({ title, value, description, icon: Icon }) {
  return (
    <motion.div
      className="stats-card"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="stat-icon"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={22} />
      </motion.div>

      <div className="stat-content">
        <h3 className="stats-title">{title}</h3>
        <motion.strong
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          {value}
        </motion.strong>
        <p>{description}</p>
      </div>

      <div className="stat-line">
        <motion.div
          className="stat-line-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
