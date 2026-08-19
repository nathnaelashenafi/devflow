import { useState } from "react";
import { motion } from "framer-motion";
import { Goal } from "../components/Goal";
import { BookOpen, Flame, FolderKanban, Zap } from "lucide-react";
import { StatsGrid } from "../components/StatsGrid";
import { LearningProgress } from "../components/LearningProgress";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { projects } from "../data/projects";
import { goalsData } from "../data/goals";
import { learningProgress } from "../data/learningprogress";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Dashboard() {
  const [goals, setGoals] = useState(goalsData);

  const stats = [
    {
      id: "1",
      title: "Learning Progress",
      value: "78%",
      description: "+12% this month",
      icon: BookOpen,
    },
    {
      id: "2",
      title: "Current Streak",
      value: "14 days",
      description: "keep going!",
      icon: Flame,
    },
    {
      id: "3",
      title: "Projects",
      value: "80%",
      description: "+3 projects",
      icon: FolderKanban,
    },
    {
      id: "4",
      title: "XP",
      value: "+2450",
      description: "+320 this week",
      icon: Zap,
    },
  ];

  return (
    <motion.div
      className="dashboard"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="dashboard-header"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Good morning, Nathnael 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Keep building. Keep learning. Keep growing.
          </motion.p>
        </div>

        <motion.div
          className="dashboard-date"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span>Today's Progress</span>
          <strong>78%</strong>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StatsGrid stats={stats} />
      </motion.div>

      <div className="dashboard-main-grid">
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <LearningProgress progress={learningProgress} />
        </motion.div>

        <motion.div
          className="goals-section"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="section-heading">
            <h2 className="goals-section-title">Today's Goals</h2>
            <p>Stay focused on what matters</p>
          </div>
          <Goal goals={goals} setGoals={setGoals} />
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ProjectsGrid projects={projects} />
      </motion.div>
    </motion.div>
  );
}
