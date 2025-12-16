// src/components/Card.jsx
export default function Card({ title, value, icon, gradient = false }) {
  return (
    <div
      className={`
      relative group cursor-pointer
      ${
        gradient
          ? "bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50"
          : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
      }
      shadow-lg hover:shadow-xl
      rounded-2xl p-6
      flex items-center gap-4
      transition-all duration-300 ease-out
      hover:scale-[1.02] hover:-translate-y-1
      before:absolute before:inset-0 before:rounded-2xl 
      before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
      overflow-hidden
    `}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      {/* Icon container with modern styling */}
      {icon && (
        <div
          className={`
          flex-shrink-0 p-3 rounded-xl
          ${
            gradient
              ? "bg-white/70 text-indigo-600"
              : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700"
          }
          shadow-sm group-hover:shadow-md transition-all duration-300
          group-hover:scale-110
        `}
        >
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className={`
          text-sm font-semibold tracking-wide uppercase
          ${gradient ? "text-indigo-600/80" : "text-gray-500"}
          transition-colors duration-300
        `}
        >
          {title}
        </h3>
        <p
          className={`
          mt-2 text-3xl font-bold tracking-tight
          ${gradient ? "text-indigo-900" : "text-gray-900"}
          transition-all duration-300
          group-hover:scale-105 origin-left
        `}
        >
          {value}
        </p>
      </div>

      {/* Optional accent dot */}
      <div
        className={`
        absolute top-4 right-4 w-2 h-2 rounded-full
        ${gradient ? "bg-indigo-400" : "bg-gray-300"}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      `}
      />
    </div>
  );
}
