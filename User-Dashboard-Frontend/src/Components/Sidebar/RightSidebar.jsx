// RightSidebar.jsx

import React from "react";
import Sidebar from "../UI/Sidebar.jsx";
import { Sparkles, Award, Phone } from "lucide-react";

// ---------------- Suggested Heroes ----------------
const SuggestedHeroes = () => {
  const heroes = ["Ananya", "Karan", "Divya"];
  return (
    <Sidebar title="Suggested Heroes">
      <div className="space-y-3">
        {heroes.map((hero, i) => (
          <button
            key={i}
            aria-label={`Follow ${hero}`}
            className="w-full flex items-center justify-between p-2 rounded-lg border hover:bg-gray-50 transition"
          >
            <span className="text-sm text-gray-700">{hero}</span>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              Follow
            </span>
          </button>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Success Stories ----------------
const SuccessStories = () => {
  const stories = [
    "Park Renovation completed in Sector 5",
    "Street Lights fixed in MG Road",
    "Water pipeline upgraded in South Block",
  ];

  return (
    <Sidebar title="Success Stories" icon={<Sparkles size={18} />}>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        {stories.map((story, i) => (
          <li key={i}>{story}</li>
        ))}
      </ul>
    </Sidebar>
  );
};

// ---------------- Quick Actions ----------------
const QuickActions = () => {
  const actions = [
    { name: "Report", bg: "blue-50", text: "blue-600", hover: "blue-100" },
    { name: "Volunteer", bg: "green-50", text: "green-600", hover: "green-100" },
    { name: "Donate", bg: "yellow-50", text: "yellow-600", hover: "yellow-100" },
    { name: "Share", bg: "purple-50", text: "purple-600", hover: "purple-100" },
  ];

  return (
    <Sidebar title="Quick Actions">
      <div className="grid grid-cols-2 gap-3 text-sm">
        {actions.map((action, i) => (
          <button
            key={i}
            className={`p-2 bg-${action.bg} text-${action.text} rounded-lg hover:bg-${action.hover}`}
          >
            {action.name}
          </button>
        ))}
      </div>
    </Sidebar>
  );
};

// ---------------- Emergency Contacts ----------------
const EmergencyContacts = () => {
  const contacts = [
    { name: "Police", number: "100" },
    { name: "Ambulance", number: "108" },
    { name: "Fire", number: "101" },
  ];

  return (
    <Sidebar title="Emergency Contacts" icon={<Phone size={18} />}>
      <ul className="text-sm text-gray-600 space-y-1">
        {contacts.map((contact, i) => (
          <li key={i}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </Sidebar>
  );
};

// ---------------- Leaderboard ----------------
const Leaderboard = () => {
  const leaders = [
    { name: "Meera", points: 120 },
    { name: "Raj", points: 110 },
    { name: "Kavita", points: 95 },
  ];

  return (
    <Sidebar title="Leaderboard" icon={<Award size={18} />}>
      <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
        {leaders.map((leader, i) => (
          <li key={i}>
            {leader.name} – {leader.points} pts
          </li>
        ))}
      </ol>
    </Sidebar>
  );
};

// ---------------- RightSidebar ----------------
const RightSidebar = () => {
  return (
    <div className="space-y-6">
      <SuggestedHeroes />
      <SuccessStories />
      <QuickActions />
      <EmergencyContacts />
      <Leaderboard />
    </div>
  );
};

export default RightSidebar;
