import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Learning } from "./pages/Learning";
import { Calendar } from "./pages/Calendar";
import { Goals } from "./pages/Goals";
import { Notes } from "./pages/Notes";
import { Profile } from "./pages/Profile";
import { Projects } from "./pages/Projects";
import { Settings } from "./pages/Settings";
import { NotFound } from "./pages/NotFound";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
