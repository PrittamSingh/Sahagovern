// AnimatedBackground.jsx

import React from "react";

const AnimatedBackground = ({ mousePosition }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Dynamic gradient orbs */}
    <div
      className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30 rounded-full blur-3xl animate-pulse"
      style={{
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 70%, transparent 100%)",
        transform: `translate(${mousePosition.x * 15}px, ${
          mousePosition.y * 15
        }px)`,
        animation: "float 6s ease-in-out infinite",
      }}
    />
    <div
      className="absolute top-3/4 right-1/4 w-96 h-96 opacity-30 rounded-full blur-3xl animate-pulse"
      style={{
        background:
          "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%)",
        transform: `translate(${-mousePosition.x * 12}px, ${
          -mousePosition.y * 12
        }px)`,
        animation: "float 8s ease-in-out infinite reverse",
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 w-64 h-64 opacity-20 rounded-full blur-2xl"
      style={{
        background:
          "conic-gradient(from 0deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3), rgba(236, 72, 153, 0.3))",
        transform: `translate(-50%, -50%) rotate(${
          Date.now() * 0.01 % 360
        }deg)`,
        animation: "spin 20s linear infinite",
      }}
    />

    {/* Floating particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

export default AnimatedBackground;
