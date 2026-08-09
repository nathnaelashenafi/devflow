import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  User,
  Target,
  CalendarDays,
  NotebookPen,
  Settings,
  LogOut,
  Sun,
  Code2,
} from "lucide-react";
import "../index.css";
import { NavLink } from "react-router-dom";
export function Sidebar() {
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
            <span>Dashborad</span>
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
            to="projects"
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
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <NotebookPen size={19} />
            <span>Notes</span>
          </NavLink>
        </div>
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-section">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "side-btn active" : "side-btn"
            }
          >
            <Settings size={19} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="#" className="side-btn logout">
            <LogOut size={19} />
            <span>Logout</span>
          </NavLink>
        </div>

        <button className="theme-toggle">
          <div className="theme-icon">
            <Sun size={17} />
          </div>
          <span>Light Mode</span>
          <div className="toggle">
            <div className="toggle-circle"></div>
          </div>
        </button>
        <div className="sidebar-motivation">
          <p>Keep pushing forward.</p>
          <span>Build. Learn. Grow. </span>
        </div>
      </div>
    </aside>
  );
}
