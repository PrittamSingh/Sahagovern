import React from "react";
import Sidebar from "../UI/Sidebar.jsx";
import CategoryCard from "../UI/CategoryCard.jsx";
import {
  Filter,
  AlertTriangle,
  CheckCircle,
  Star,
  Target,
  Users,
  Lightbulb,
  Droplets,
  Trash2,
  Construction,
  Wifi,
  TreePine,
  ClockFading,
} from "lucide-react";

// ---------------- Categories Section ----------------
const CategoriesSection = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    {
      id: "lighting",
      name: "Street Lights",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      id: "water",
      name: "Water Supply",
      icon: Droplets,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      id: "waste",
      name: "Waste Management",
      icon: Trash2,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      id: "roads",
      name: "Road Repairs",
      icon: Construction,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      id: "internet",
      name: "Internet/WiFi",
      icon: Wifi,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      id: "environment",
      name: "Environment",
      icon: TreePine,
      color: "from-green-600 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
  ];

  return (
    <Sidebar title="Categories" icon={<Filter />}>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Your Impact Section ----------------
const YourImpactSection = () => {
  const stats = [
    { label: "Issues Reported", value: 12, color: "text-blue-700", icon: AlertTriangle },
    { label: "Issues Resolved", value: 8, color: "text-green-700", icon: CheckCircle },
    { label: "Issues Pending", value: 4, color: "text-red-700", icon: ClockFading },
    { label: "Community Score", value: 850, color: "text-purple-700", icon: Star },
  ];

  return (
    <Sidebar title="Your Impact" icon={<Target />}>
      <div className="space-y-6 text-sm">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <stat.icon size={20} className={stat.color} />
              <span className="font-medium text-gray-700">{stat.label}</span>
            </div>
            <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Active Heroes Section ----------------
const ActiveHeroesSection = () => {
  const users = [
    { name: "Bhopal Municipal", avatar: "🏛️", status: "Responding to issues", online: true },
    { name: "Dr. Priya Sharma", avatar: "👩‍⚕️", status: "Sharing solutions", online: true },
    { name: "Local Electrician", avatar: "⚡", status: "Offering help", online: true },
  ];

  return (
    <Sidebar title="Active Heroes" icon={<Users />}>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative text-2xl">
              <span>{user.avatar}</span>
              {user.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.status}</div>
            </div>
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- LeftSidebar ----------------
const LeftSidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="space-y-6">
      <CategoriesSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <YourImpactSection />
      <ActiveHeroesSection />
    </div>
  );
};

export default LeftSidebar;
