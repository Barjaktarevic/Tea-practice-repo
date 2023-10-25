import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-slate-800 h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}
