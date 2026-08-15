import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  User,
  Target,
  CalendarDays,
  LogOut,
  Sun,
  Code2,
} from "lucide-react";
import "../index.css";
import { NavLink } from "react-router-dom";
export function Sidebar({ lightMode, setLightMode }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Code2 size={22} />
        </div>

        <span>DevFlow</span>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section">
          <p className="section-title">Workspace</p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/learning"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <BookOpen size={19} />
            <span>Learning</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <FolderKanban size={19} />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <User size={19} />
            <span>Profile</span>
          </NavLink>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Productivity</p>

          <NavLink
            to="/goals"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <Target size={19} />
            <span>Goals</span>
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <CalendarDays size={19} />
            <span>Calendar</span>
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-section">
          <button className="side-btn logout">
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setLightMode(!lightMode)}
        >
          <div className="theme-icon">
            <Sun size={17} />
          </div>

          <span>{lightMode ? "Light Mode" : "Dark Mode"}</span>

          <div className={`toggle ${lightMode ? "toggle-active" : ""}`}>
            <div className="toggle-circle"></div>
          </div>
        </button>

        <div className="sidebar-motivation">
          <p>Keep pushing forward.</p>
          <span>Build. Learn. Grow.</span>
        </div>
      </div>
    </aside>
  );
}
