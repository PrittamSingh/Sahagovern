import React from "react";

const CategoryCard = ({ category, isSelected, onClick }) => {
  // Classes for selected and non-selected states
  const containerClasses = isSelected
    ? "bg-gradient-to-br from-white to-gray-50 shadow-2xl ring-2 ring-blue-500 ring-opacity-50"
    : "bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-2xl";

  const iconContainerClasses = isSelected
    ? category.bgColor
    : "bg-gray-100 group-hover:bg-gray-200";

  const iconClasses = isSelected
    ? category.textColor
    : "text-gray-600 group-hover:text-gray-800";

  const indicatorClasses = isSelected
    ? "bg-blue-500"
    : "bg-transparent group-hover:bg-blue-200";

  // Safely get the icon component
  const IconComponent = category.icon;

  return (
    <button
      onClick={() => onClick(category.id)}
      className={`group relative w-full overflow-hidden transition-all duration-500 hover:scale-105 ${containerClasses} backdrop-blur-xl rounded-2xl p-4`}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${category.color})` }}
      />

      {/* Main content */}
      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${iconContainerClasses}`}
        >
          {IconComponent && (
            <IconComponent
              size={24}
              className={`transition-all duration-300 ${iconClasses} group-hover:scale-110`}
            />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 text-left">
          <span
            className={`font-bold transition-colors ${
              isSelected ? category.textColor : "text-gray-800"
            }`}
          >
            {category.name}
          </span>
          <div className="text-xs text-gray-500 mt-1">
            {Math.floor(Math.random() * 50 + 10)} active issues
          </div>
        </div>

        {/* Indicator */}
        <div
          className={`w-2 h-8 rounded-full transition-all duration-300 ${indicatorClasses}`}
        />
      </div>
    </button>
  );
};

export default CategoryCard;
