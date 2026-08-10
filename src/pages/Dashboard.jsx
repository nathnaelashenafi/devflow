import { Goal } from "../components/Goal";
import { ProjectCard } from "../components/ProjectCard";
import { ProgressBar } from "../components/ProgressBar";
import { StatCard } from "../components/StatCard";
import { BookOpen, Flame, FolderKanban, Zap } from "lucide-react";
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
      value: "-> 80%",
      description: "+3 projects",
      icon: FolderKanban,
    },
    {
      id: "4",
      title: "XP",
      value: "+2450",
      description: "+320 points this week",
      icon: Zap,
    },
  ];

  const learningProgress = [
    {
      id: "1",
      subject: "JavaScript",
      percentage: 85,
    },
    {
      id: "2",
      subject: "React",
      percentage: 72,
    },
    {
      id: "3",
      subject: "Python",
      percentage: 55,
    },
    {
      id: "4",
      subject: "AWS",
      percentage: 35,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      technology: "React",
      percentage: 85,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Weather App",
      technology: "JavaScript",
      percentage: 100,
      status: "Completed",
    },
    {
      id: 3,
      title: "NexaFit",
      technology: "HTML/CSS/JS",
      percentage: 90,
      status: "In Progress",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Good morning, Nathnael 👋</h1>
      <p>Your developer journey starts here.</p>
      <div className="stats-grid">
        {stats.map((stat) => {
          return (
            <StatCard
              key={stat.id}
              title={stat.title}
              description={stat.description}
              value={stat.value}
              icon={stat.icon}
            />
          );
        })}
      </div>
      <div className="progress-bar">
        <h2 className="prog-title">Learning Progress</h2>
        <div className="progress-cont">
          {learningProgress.map((prog) => {
            return (
              <ProgressBar
                key={prog.id}
                subject={prog.subject}
                percentage={prog.percentage}
              />
            );
          })}
        </div>
      </div>
      <div className="goals-section">
        <h2 className="goals-section-title">Todays Goals</h2>
        <Goal />
      </div>
      <div className="projects-section">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                technology={project.technology}
                percentage={project.percentage}
                status={project.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
