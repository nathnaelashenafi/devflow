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
  X,
} from "lucide-react";
import "../index.css";
import { NavLink } from "react-router-dom";

export function Sidebar({
  lightMode,
  setLightMode,
  sidebarOpen,
  setSidebarOpen,
}) {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-icon">
            <Code2 size={22} />
          </div>

          <span>DevFlow</span>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <p className="section-title">Workspace</p>

            <NavLink
              to="/"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "side-btn active" : "side-btn"
              }
            >
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/learning"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "side-btn active" : "side-btn"
              }
            >
              <BookOpen size={19} />
              <span>Learning</span>
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "side-btn active" : "side-btn"
              }
            >
              <FolderKanban size={19} />
              <span>Projects</span>
            </NavLink>

            <NavLink
              to="/profile"
              onClick={closeSidebar}
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
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive ? "side-btn active" : "side-btn"
              }
            >
              <Target size={19} />
              <span>Goals</span>
            </NavLink>

            <NavLink
              to="/calendar"
              onClick={closeSidebar}
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
            <button
              className="side-btn logout"
              onClick={() => alert("Logout functionality coming soon.")}
            >
              <LogOut size={19} />
              <span>Logout</span>
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setLightMode(!lightMode)}
            aria-label={
              lightMode ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            <div className="theme-icon">
              <Sun size={17} />
            </div>

            <span>{lightMode ? "Light Mode On" : "Dark Mode On"}</span>

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
    </>
  );
}
