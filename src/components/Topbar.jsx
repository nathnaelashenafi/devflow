import { Bell, Search, Sun, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { projects } from "../data/projects";

const searchTargets = [
  {
    path: "/",
    keywords: ["dashboard", "home", "overview", "main"],
  },
  {
    path: "/learning",
    keywords: ["learning", "courses", "lessons", "progress", "study"],
  },
  {
    path: "/projects",
    keywords: ["projects", "portfolio", "work", "apps", "nexa", "weather"],
  },
  {
    path: "/profile",
    keywords: ["profile", "account", "user", "me", "developer", "nathnael"],
  },
  {
    path: "/goals",
    keywords: ["goals", "target", "habit", "focus"],
  },
  {
    path: "/calendar",
    keywords: ["calendar", "schedule", "events", "plan", "date"],
  },
];

export function Topbar({ lightMode, setLightMode, setSidebarOpen }) {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const query = search.trim().toLowerCase();

    if (!query) {
      return;
    }

    const matchedRoute = searchTargets.find(({ keywords }) =>
      keywords.some(
        (keyword) => keyword.includes(query) || query.includes(keyword),
      ),
    );

    if (matchedRoute) {
      setSearch("");
      navigate(matchedRoute.path);
      return;
    }

    const matchedProject = projects.find(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.technology.toLowerCase().includes(query),
    );

    if (matchedProject) {
      setSearch("");
      navigate("/projects");
      return;
    }

    alert(`No matching page or project for: ${search.trim()}`);
    setSearch("");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="menu-button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu size={21} />
        </button>

        <div className="topbar-search">
          <Search size={19} />

          <input
            type="text"
            id="topBarInput"
            name="topBarInput"
            placeholder="Search anything..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      <div className="topbar-actions">
        <button
          className="topbar-btn"
          aria-label="Toggle theme"
          onClick={() => setLightMode(!lightMode)}
        >
          <Sun size={19} />
        </button>

        <div className="notification-wrapper">
          <button
            className="topbar-btn"
            aria-label="Notifications"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={19} />
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="notification-popup">
              <strong>Notifications</strong>
              <p>No new notifications.</p>
            </div>
          )}
        </div>

        <button className="topbar-profile" onClick={() => navigate("/profile")}>
          <div className="profile-avatar">
            <User size={18} />
          </div>

          <div className="profile-info">
            <span className="profile-name">Nathnael</span>
            <span className="profile-status">Developer</span>
          </div>
        </button>
      </div>
    </header>
  );
}
