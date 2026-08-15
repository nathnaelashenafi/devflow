import { Goal } from "../components/Goal";
import { BookOpen, Flame, FolderKanban, Zap } from "lucide-react";
import { StatsGrid } from "../components/StatsGrid";
import { LearningProgress } from "../components/LearningProgress";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { projects } from "../data/projects";
import { goalsData } from "../data/goals";
import { learningProgress } from "../data/learningprogress";
export function Dashboard() {
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
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Good morning, Nathnael 👋</h1>
          <p>Keep building. Keep learning. Keep growing.</p>
        </div>

        <div className="dashboard-date">
          <span>Today's Progress</span>
          <strong>78%</strong>
        </div>
      </div>
      <StatsGrid stats={stats} />
      <div className="dashboard-main-grid">
        <LearningProgress progress={learningProgress} />
        <div className="goals-section">
          <div className="section-heading">
            <h2 className="goals-section-title">Today's Goals</h2>
            <p>Stay focusedd on what matters</p>
          </div>
          <Goal goals={goalsData} />
        </div>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
