// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaList,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { FaLandmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const links = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    badge: null,
  },
  { to: "/issues", label: "Issues", icon: <FaList />, badge: "12" },
  { to: "/citizens", label: "Citizens", icon: <FaUsers />, badge: null },
  { to: "/analytics", label: "Analytics", icon: <FaChartBar />, badge: "New" },
  { to: "/users", label: "User Management", icon: <FaUsers />, badge: null },
  { to: "/department", label: "Department", icon: <FaLandmark />, badge: null },
  { to: "/settings", label: "Settings", icon: <FaCog />, badge: null },
];

export default function Sidebar({ isCollapsed = false, onToggle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const navigate = useNavigate();
  
  // Use internal state if onToggle is not provided
  const collapsed = onToggle ? isCollapsed : internalCollapsed;
  const handleToggle =
    onToggle || (() => setInternalCollapsed(!internalCollapsed));
    
  const handleLogout = () => {
    // (optional) clear auth token / localStorage here
    localStorage.removeItem("token"); 
    navigate("/authpage"); // redirect to auth page
  };

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleToggle}
        />
      )}

      {/* Toggle Button - Fixed position for mobile */}
      <button
        onClick={handleToggle}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300"
      >
        {collapsed ? (
          <FaBars className="w-5 h-5" />
        ) : (
          <FaTimes className="w-5 h-5" />
        )}
      </button>

      <div
        className={`
          ${collapsed ? "w-20" : "w-72"}
          bg-gradient-to-b from-slate-50 via-blue-50 to-green-50
          text-gray-900 flex flex-col
          shadow-2xl shadow-blue-500/20
          border-r border-gray-200
          transition-all duration-300 ease-in-out
          relative overflow-hidden
          ${collapsed ? "translate-x-0" : "translate-x-0"}
          lg:translate-x-0
          ${collapsed ? "lg:w-20" : "lg:w-72"}
          fixed lg:static
          h-full
          z-40
          ${collapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}
        `}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Header */}
        <div
          className={`relative ${
            collapsed ? "p-3" : "p-6"
          } border-b border-gray-200 transition-all duration-300`}
        >
          <div
            className={`${
              collapsed
                ? "flex flex-col items-center gap-2"
                : "flex items-center justify-between"
            } transition-all duration-300`}
          >
            <div
              className={`flex items-center ${
                collapsed ? "gap-0 justify-center" : "gap-3"
              } transition-all duration-300`}
            >
              {/* Logo */}
              <div
                className={`${
                  collapsed ? "w-10 h-10" : "w-12 h-12"
                } rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110`}
              >
                <Shield
                  className="text-white"
                  size={collapsed ? 20 : 24}
                />
              </div>

              {!collapsed && (
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    सहGovern
                  </h1>
                  <p className="text-sm text-gray-600">Admin Portal</p>
                </div>
              )}
            </div>

            {/* Desktop Collapse toggle */}
            <button
              onClick={handleToggle}
              className="hidden lg:flex p-2 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-gray-600 hover:text-blue-600"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  collapsed ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Mobile close button */}
            <button
              onClick={handleToggle}
              className="lg:hidden p-2 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-gray-600 hover:text-blue-600"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Bar - only show when not collapsed */}

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <div className="space-y-1">
            {links
              .filter(
                (link) =>
                  searchQuery === "" ||
                  link.label.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-50 hover:translate-x-1 hover:shadow-md ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/10 to-green-500/10 border-r-4 border-blue-500 text-blue-600 shadow-lg"
                        : "text-gray-700 hover:text-blue-600"
                    } ${
                      collapsed ? "justify-center" : ""
                    } relative overflow-hidden`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active indicator */}
                      {isActive && !collapsed && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-r" />
                      )}

                      {/* Icon */}
                      <div
                        className={`flex items-center justify-center transition-colors duration-200 ${
                          isActive
                            ? "text-blue-600"
                            : "text-gray-600 group-hover:text-blue-600"
                        } ${collapsed ? "text-lg" : "text-base"}`}
                      >
                        {link.icon}
                      </div>

                      {/* Label + Badge */}
                      {!collapsed && (
                        <div className="flex items-center justify-between flex-1 min-w-0">
                          <span className="font-medium truncate">
                            {link.label}
                          </span>
                          {link.badge && (
                            <span
                              className={`px-2 py-1 text-xs font-bold rounded-full ${
                                link.badge === "New"
                                  ? "bg-green-100 text-green-700 border border-green-200"
                                  : "bg-red-100 text-red-700 border border-red-200"
                              } animate-pulse`}
                            >
                              {link.badge}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Tooltip for collapsed state */}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-3 py-2 bg-white/95 backdrop-blur-2xl text-gray-900 text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-gray-200">
                          {link.label}
                          {link.badge && (
                            <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200">
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className={`group w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 ${
              collapsed ? "justify-center" : ""
            } relative hover:shadow-md`}
          >
            <FaSignOutAlt className="text-base" />
            {!collapsed && <span className="font-medium">Logout</span>}

            {/* Tooltip for collapsed logout */}
            {collapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-white/95 backdrop-blur-2xl text-gray-900 text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-gray-200">
                Logout
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}