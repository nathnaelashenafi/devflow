import { Goal } from "../components/Goal";
import { BookOpen, Flame, FolderKanban, Zap } from "lucide-react";
import { StatsGrid } from "../components/StatsGrid";
import { LearningProgress } from "../components/LearningProgress";
import { ProjectsGrid } from "../components/ProjectsGrid";
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

  const learningProgress = [
    {
      id: "1",
      subject: "JavaScript",
      percentage: 85,
      icon: "javascript",
    },
    {
      id: "2",
      subject: "React",
      percentage: 72,
      icon: "react",
    },
    {
      id: "3",
      subject: "Python",
      percentage: 55,
      icon: "python",
    },
    {
      id: "4",
      subject: "CSS",
      percentage: 100,
      icon: "css",
    },
    {
      id: "5",
      subject: "Node.js",
      percentage: 30,
      icon: "node",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Weather App",
      technology: "JavaScript • API • CSS",
      image: "/projects/weatherapp.png",
      percentage: 100,
      status: "Completed",
    },
    {
      id: 2,
      title: "NexaAI",
      technology: "HTML • CSS • JavaScript",
      image: "/projects/nexaai.png",
      percentage: 90,
      status: "In Progress",
    },
    {
      id: 3,
      title: "NexaFit",
      technology: "HTML • CSS • JavaScript",
      image: "/projects/nexafit.png",
      percentage: 95,
      status: "In Progress",
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
            <h2 className="goals-section-title">Todays Goals</h2>
            <button> + Add Goal</button>
          </div>
          <Goal />
        </div>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
