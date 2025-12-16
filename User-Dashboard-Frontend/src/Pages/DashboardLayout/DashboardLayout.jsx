// Components/UI/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../AuthCredentials/Navbar";
import LeftSidebar from "../Sidebar/LeftSidebar";
import RightSidebar from "../Sidebar/RightSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 hidden md:block border-r border-gray-200">
        <LeftSidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet /> {/* ✅ this renders Home, Feed, NewPostForm */}
        </main>
      </div>

      {/* Right Sidebar */}
      <aside className="w-80 hidden lg:block border-l border-gray-200">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default DashboardLayout;
