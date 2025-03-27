import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ onClose }) => {
  return (
    <aside className="w-64 bg-white h-screen border-r shadow-sm flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="px-6 py-4 text-2xl font-bold text-yellow-500 pb-5 border-b flex justify-between items-center">
          <span>
            MS<span className="text-black">League</span>
          </span>
          <button className="md:hidden text-xl" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="mt-4 space-y-1 px-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-yellow-50 ${
                isActive ? "bg-yellow-100 font-semibold" : "text-gray-800"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/learning"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-yellow-50 ${
                isActive ? "bg-yellow-100 font-semibold" : "text-gray-800"
              }`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/tvprograms"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-yellow-50 ${
                isActive ? "bg-yellow-100 font-semibold" : "text-gray-800"
              }`
            }
          >
            TV Programs
          </NavLink>

          <NavLink
            to="/forum"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-yellow-50 ${
                isActive ? "bg-yellow-100 font-semibold" : "text-gray-800"
              }`
            }
          >
            Forum
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-yellow-50 ${
                isActive ? "bg-yellow-100 font-semibold" : "text-gray-800"
              }`
            }
          >
            Profile
          </NavLink>
        </nav>
      </div>

      {/* Logout at bottom */}
      <div className="px-4 py-4 border-t">
        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
