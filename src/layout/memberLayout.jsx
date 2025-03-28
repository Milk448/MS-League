import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { useState } from "react";

const MemberLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar (responsive) */}
      <div
        className={`fixed md:static z-20 ${
          showSidebar ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar onClose={() => setShowSidebar(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar onToggleSidebar={() => setShowSidebar(!showSidebar)} />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MemberLayout;
