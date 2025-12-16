import React, { useState } from "react";

// SVG Icons as React components
const Search = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const Eye = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const Edit = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
  </svg>
);

const Trash2 = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3,6 5,6 21,6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const MapPin = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Calendar = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const User = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const AlertCircle = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const CheckCircle = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22,4 12,14.01 9,11.01"></polyline>
  </svg>
);

const RefreshCw = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23,4 23,10 17,10"></polyline>
    <polyline points="1,20 1,14 7,14"></polyline>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,15 17,10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Plus = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default function UsersManagement() {
  // Dummy data for Jharkhand civic issues
  const [issues, setIssues] = useState([
    {
      id: 1,
      title: "Potholes on Ranchi Main Road",
      description: "Large potholes near Firayalal Chowk causing traffic issues",
      status: "Open",
      priority: "High",
      location: "Ranchi",
      date: "2024-03-15",
      assignedTo: "Municipal Corp",
    },
    {
      id: 2,
      title: "Street Light Not Working",
      description: "Multiple street lights not working in Adityapur",
      status: "In Progress",
      priority: "Medium",
      location: "Jamshedpur",
      date: "2024-03-16",
      assignedTo: "Electricity Dept",
    },
    {
      id: 3,
      title: "Garbage Collection Delay",
      description: "Regular delay in garbage collection at Harmu Housing",
      status: "Resolved",
      priority: "Low",
      location: "Ranchi",
      date: "2024-03-14",
      assignedTo: "Sanitation Dept",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [filterStatus, setFilterStatus] = useState("All");
  const [modalData, setModalData] = useState(null);

  const handleAction = (action, issue) => {
    if (action === "delete") {
      setIssues(issues.filter((i) => i.id !== issue.id));
    } else {
      setModalData({ action, issue });
    }
  };

  const exportCSV = () => {
    const headers = [
      "ID",
      "Title",
      "Description",
      "Status",
      "Priority",
      "Location",
      "Date",
      "Assigned To",
    ];
    const csvData = issues.map((issue) =>
      [
        issue.id,
        issue.title,
        issue.description,
        issue.status,
        issue.priority,
        issue.location,
        issue.date,
        issue.assignedTo,
      ].join(",")
    );
    const csvContent = [headers.join(","), ...csvData].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "issues.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredIssues = issues
    .filter(
      (issue) =>
        (filterStatus === "All" || issue.status === filterStatus) &&
        (issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          issue.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return new Date(b.date) - new Date(a.date);
    });

  const StatusBadge = ({ status }) => {
    const statusStyles = {
      Open: "bg-red-100 text-red-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      Resolved: "bg-green-100 text-green-800",
    };
    const statusIcons = {
      Open: <AlertCircle size={14} />,
      "In Progress": <RefreshCw size={14} />,
      Resolved: <CheckCircle size={14} />,
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${statusStyles[status]}`}
      >
        {statusIcons[status]}
        {status}
      </span>
    );
  };

  const PriorityBadge = ({ priority }) => {
    const priorityColors = {
      High: "bg-red-50 text-red-600 border-red-200",
      Medium: "bg-yellow-50 text-yellow-600 border-yellow-200",
      Low: "bg-green-50 text-green-600 border-green-200",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium border ${priorityColors[priority]}`}
      >
        {priority}
      </span>
    );
  };

  const Modal = () => {
    if (!modalData) return null;
    const { action, issue } = modalData;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-auto">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {action.charAt(0).toUpperCase() + action.slice(1)} Issue
            </h3>
            <button
              onClick={() => setModalData(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-600">{issue.title}</p>
            <p>{issue.description}</p>
            <div className="flex gap-2 flex-wrap">
              <StatusBadge status={issue.status} />
              <PriorityBadge priority={issue.priority} />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={14} /> {issue.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={14} /> {issue.date}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User size={14} /> {issue.assignedTo}
            </div>
          </div>
          <div className="p-6 border-t">
            <button
              onClick={() => setModalData(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen max-w-6xl bg-gray-50">
      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex flex-wrap items-center gap-4 justify-between p-4 bg-white border-b">
          <h2 className="text-xl font-semibold">Civic Issues Dashboard</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
            >
              <Download size={16} />
              Export
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              <Plus size={16} />
              Add New Issue
            </button>
          </div>
        </header>

        {/* Filters */}
        <div className="p-4 bg-white border-b flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search issues..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
          </select>
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        {/* Issues Table */}
        <div className="p-4 overflow-x-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Title
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Description
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Priority
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Location
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Date
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Assigned To
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredIssues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{issue.title}</td>
                    <td className="py-4 px-6 max-w-xs truncate">
                      {issue.description}
                    </td>
                    <td className="py-4 px-6">
                      <StatusBadge status={issue.status} />
                    </td>
                    <td className="py-4 px-6">
                      <PriorityBadge priority={issue.priority} />
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} className="text-gray-400" />
                        {issue.location}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" />
                        {issue.date}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1">
                        <User size={14} className="text-gray-400" />
                        {issue.assignedTo}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAction("view", issue)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleAction("edit", issue)}
                          className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleAction("delete", issue)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <Modal />
      </div>
    </div>
  );
}
