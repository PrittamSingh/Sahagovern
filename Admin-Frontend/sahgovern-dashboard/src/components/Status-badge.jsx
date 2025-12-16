// src/components/StatusBadge.jsx
export default function StatusBadge({ status }) {
  const colors = {
    Open: "bg-red-100 text-red-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Resolved: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[status] || "bg-gray-100 text-gray-800"}`}
    >
      {status}
    </span>
  );
}
