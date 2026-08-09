import { Sidebar } from "../components/sidebar";
import { Topbar } from "../components/Topbar";
import { Outlet } from "react-router-dom";
export function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
