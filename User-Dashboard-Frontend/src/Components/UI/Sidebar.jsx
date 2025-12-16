// Sidebar.jsx

import React from "react";

const Sidebar = ({ title, icon: Icon, children }) => {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md p-5">
      <div className="flex items-center space-x-2 mb-4">
        {Icon && <div className="text-blue-600">{Icon}</div>}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
