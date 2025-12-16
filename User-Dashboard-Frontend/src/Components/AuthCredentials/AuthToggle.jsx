// AuthToggle.jsx

import React from "react";
import { LogIn, UserPlus } from "lucide-react";

const AuthToggle = ({ isLogin, setIsLogin }) => {
  return (
    <div className="bg-gray-100/50 p-1 rounded-2xl mb-6 flex backdrop-blur-sm">
      <button
        onClick={() => setIsLogin(true)}
        className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
          isLogin ? "bg-white text-blue-700 shadow-lg transform scale-105" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <LogIn size={18} />
        Sign In
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
          !isLogin ? "bg-white text-green-700 shadow-lg transform scale-105" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <UserPlus size={18} />
        Sign Up
      </button>
    </div>
  );
};

export default AuthToggle;
