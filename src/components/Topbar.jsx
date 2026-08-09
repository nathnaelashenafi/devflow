import { Bell, Search, Sun, User } from "lucide-react";
import "../index.css";
export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={19} />
        <input
          type="text"
          id="topBarInput"
          name="topBarInput"
          placeholder="Search anything..."
        />
      </div>
      <div className="topbar-actions">
        <button className="topbar-btn" aria-label="Toggle theme">
          <Sun size={19} />
        </button>
        <button className="topbar-btn" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <button className="topbar-profile">
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
