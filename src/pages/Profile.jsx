import { motion } from "framer-motion";
import {
  User,
  Mail,
  GraduationCap,
  Code2,
  Flame,
  BookOpen,
  FolderKanban,
} from "lucide-react";
import "../index.css";

export function Profile() {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Python", "AWS"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="profile-header"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ y: -2 }}
      >
        <motion.div
          className="profile-avatar"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <User size={32} />
        </motion.div>

        <div>
          <h1>Nathnael Ashenafi</h1>
          <p>Computer Science Student • Developer</p>
        </div>

        <motion.button
          className="profile-edit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Edit Profile
        </motion.button>
      </motion.div>

      <div className="profile-grid">
        <motion.div
          className="profile-card"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -3 }}
        >
          <div className="profile-card-heading">
            <h2>Personal Information</h2>
          </div>

          <div className="profile-info">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "nathnaelashenafi21@gmail.com",
                link: true,
              },
              {
                icon: GraduationCap,
                label: "Education",
                value: "Computer Science",
              },
              { icon: Code2, label: "Role", value: "Developer" },
            ].map((item, index) => (
              <motion.div
                className="profile-info-item"
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <item.icon size={18} />
                <div>
                  <span>{item.label}</span>
                  <strong>
                    {item.link ? (
                      <a href={`mailto:${item.value}`}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </strong>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="profile-card"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -3 }}
        >
          <div className="profile-card-heading">
            <h2>Skills</h2>
          </div>

          <div className="profile-skills">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="profile-card profile-overview"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ y: -3 }}
      >
        <div className="profile-card-heading">
          <h2>Learning Overview</h2>
        </div>

        <div className="profile-stats">
          {[
            { icon: BookOpen, label: "Courses", value: "4" },
            { icon: Flame, label: "Current Streak", value: "14 days" },
            { icon: FolderKanban, label: "Projects", value: "3" },
          ].map((stat, index) => (
            <motion.div
              className="profile-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon size={20} />
              <div>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
