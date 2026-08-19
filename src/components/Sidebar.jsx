import { motion, AnimatePresence } from "framer-motion";
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
    // Only close on mobile (screen width < 900px)
    if (window.innerWidth < 900) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && window.innerWidth < 900 && (
          <motion.div
            className="sidebar-overlay"
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
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

            {[
              { to: "/", icon: LayoutDashboard, label: "Dashboard" },
              { to: "/learning", icon: BookOpen, label: "Learning" },
              { to: "/projects", icon: FolderKanban, label: "Projects" },
              { to: "/profile", icon: User, label: "Profile" },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavLink
                  to={item.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive ? "side-btn active" : "side-btn"
                  }
                >
                  <item.icon size={19} />
                  <span>{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="sidebar-section">
            <p className="section-title">Productivity</p>

            {[
              { to: "/goals", icon: Target, label: "Goals" },
              { to: "/calendar", icon: CalendarDays, label: "Calendar" },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <NavLink
                  to={item.to}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive ? "side-btn active" : "side-btn"
                  }
                >
                  <item.icon size={19} />
                  <span>{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-section">
            <motion.button
              className="side-btn logout"
              onClick={() => alert("Logout functionality coming soon.")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut size={19} />
              <span>Logout</span>
            </motion.button>
          </div>

          <motion.button
            className="theme-toggle"
            onClick={() => setLightMode(!lightMode)}
            aria-label={
              lightMode ? "Switch to dark mode" : "Switch to light mode"
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="theme-icon">
              <Sun size={17} />
            </div>

            <span>{lightMode ? "Light Mode On" : "Dark Mode On"}</span>

            <div className={`toggle ${lightMode ? "toggle-active" : ""}`}>
              <div className="toggle-circle"></div>
            </div>
          </motion.button>

          <motion.div
            className="sidebar-motivation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>Keep pushing forward.</p>
            <span>Build. Learn. Grow.</span>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
