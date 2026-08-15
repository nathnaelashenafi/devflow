import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className={lightMode ? "app-layout light-mode" : "app-layout"}>
      <Sidebar lightMode={lightMode} setLightMode={setLightMode} />

      <div className="main-content">
        <Topbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
