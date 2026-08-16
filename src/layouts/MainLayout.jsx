import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const [lightMode, setLightMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={lightMode ? "app-layout light-mode" : "app-layout"}>
      <Sidebar
        lightMode={lightMode}
        setLightMode={setLightMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-content">
        <Topbar
          lightMode={lightMode}
          setLightMode={setLightMode}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
