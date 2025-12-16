import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  Edit3,
  Trash2,
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  AlertCircle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Download,
  Plus,
} from "lucide-react";

export default function UsersManagment() {
  // Dummy data for Jharkhand civic issues
  const [issues, setIssues] = useState([
    {
      id: "JH001",
      title: "Pothole on Main Road Ranchi",
      description:
        "Large pothole causing traffic disruption near Firayalal Chowk",
      category: "Road & Transportation",
      status: "Open",
      priority: "High",
      location: "Firayalal Chowk, Ranchi",
      district: "Ranchi",
      reportedBy: "Rajesh Kumar",
      reporterPhone: "+91-9876543210",
      reporterEmail: "rajesh.kumar@email.com",
      reportedDate: "2024-09-15",
      assignedTo: "PWD Team A",
      estimatedResolution: "2024-09-25",
      ward: "15",
      constituency: "Ranchi",
      images: ["pothole1.jpg", "pothole2.jpg"],
    },
    {
      id: "JH002",
      title: "Street Light Not Working",
      description: "Multiple street lights not functioning in residential area",
      category: "Electricity",
      status: "In Progress",
      priority: "Medium",
      location: "Doranda, Ranchi",
      district: "Ranchi",
      reportedBy: "Sunita Devi",
      reporterPhone: "+91-9876543211",
      reporterEmail: "sunita.devi@email.com",
      reportedDate: "2024-09-10",
      assignedTo: "Electricity Dept.",
      estimatedResolution: "2024-09-20",
      ward: "22",
      constituency: "Ranchi",
      images: ["streetlight1.jpg"],
    },
    {
      id: "JH003",
      title: "Water Supply Disruption",
      description: "No water supply for 3 days in entire locality",
      category: "Water Supply",
      status: "Resolved",
      priority: "High",
      location: "Hindpiri, Ranchi",
      district: "Ranchi",
      reportedBy: "Anil Singh",
      reporterPhone: "+91-9876543212",
      reporterEmail: "anil.singh@email.com",
      reportedDate: "2024-09-08",
      assignedTo: "Water Works Dept.",
      estimatedResolution: "2024-09-12",
      resolvedDate: "2024-09-12",
      ward: "18",
      constituency: "Ranchi",
      images: [],
    },
    {
      id: "JH004",
      title: "Garbage Collection Missed",
      description:
        "Garbage not collected for past 4 days, creating unhygienic conditions",
      category: "Sanitation",
      status: "Open",
      priority: "High",
      location: "Kokar, Ranchi",
      district: "Ranchi",
      reportedBy: "Meera Kumari",
      reporterPhone: "+91-9876543213",
      reporterEmail: "meera.kumari@email.com",
      reportedDate: "2024-09-14",
      assignedTo: "Sanitation Dept.",
      estimatedResolution: "2024-09-18",
      ward: "12",
      constituency: "Ranchi",
      images: ["garbage1.jpg", "garbage2.jpg"],
    },
    {
      id: "JH005",
      title: "Park Maintenance Required",
      description: "Broken swings and damaged pathways in children park",
      category: "Parks & Recreation",
      status: "Open",
      priority: "Low",
      location: "Lalpur, Ranchi",
      district: "Ranchi",
      reportedBy: "Priya Sharma",
      reporterPhone: "+91-9876543214",
      reporterEmail: "priya.sharma@email.com",
      reportedDate: "2024-09-13",
      assignedTo: "Parks Dept.",
      estimatedResolution: "2024-09-30",
      ward: "25",
      constituency: "Ranchi",
      images: ["park1.jpg"],
    },
    {
      id: "JH006",
      title: "Drain Overflow Issue",
      description: "Open drain overflowing during monsoon causing waterlogging",
      category: "Drainage",
      status: "In Progress",
      priority: "High",
      location: "Dhurwa, Ranchi",
      district: "Ranchi",
      reportedBy: "Santosh Oraon",
      reporterPhone: "+91-9876543215",
      reporterEmail: "santosh.oraon@email.com",
      reportedDate: "2024-09-12",
      assignedTo: "Drainage Dept.",
      estimatedResolution: "2024-09-22",
      ward: "8",
      constituency: "Ranchi",
      images: ["drain1.jpg", "drain2.jpg"],
    },
    {
      id: "JH007",
      title: "Traffic Signal Malfunction",
      description: "Traffic signal not working properly at busy intersection",
      category: "Road & Transportation",
      status: "Open",
      priority: "High",
      location: "Main Road, Jamshedpur",
      district: "East Singhbhum",
      reportedBy: "Vikash Kumar",
      reporterPhone: "+91-9876543216",
      reporterEmail: "vikash.kumar@email.com",
      reportedDate: "2024-09-16",
      assignedTo: "Traffic Police",
      estimatedResolution: "2024-09-20",
      ward: "5",
      constituency: "Jamshedpur East",
      images: ["traffic1.jpg"],
    },
    {
      id: "JH008",
      title: "Illegal Construction",
      description: "Unauthorized construction blocking public pathway",
      category: "Building & Construction",
      status: "Under Review",
      priority: "Medium",
      location: "Sakchi, Jamshedpur",
      district: "East Singhbhum",
      reportedBy: "Raman Tiwari",
      reporterPhone: "+91-9876543217",
      reporterEmail: "raman.tiwari@email.com",
      reportedDate: "2024-09-11",
      assignedTo: "Building Dept.",
      estimatedResolution: "2024-09-28",
      ward: "11",
      constituency: "Jamshedpur West",
      images: ["construction1.jpg", "construction2.jpg"],
    },
  ]);

  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Get unique values for filters
  const categories = [...new Set(issues.map((issue) => issue.category))];
  const districts = [...new Set(issues.map((issue) => issue.district))];
  const statuses = [
    "Open",
    "In Progress",
    "Under Review",
    "Resolved",
    "Closed",
  ];
  const priorities = ["Low", "Medium", "High"];

  // Filter issues based on search and filters
  useEffect(() => {
    let filtered = issues.filter((issue) => {
      const matchesSearch =
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.reportedBy.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || issue.status === statusFilter;
      const matchesPriority =
        priorityFilter === "All" || issue.priority === priorityFilter;
      const matchesCategory =
        categoryFilter === "All" || issue.category === categoryFilter;
      const matchesDistrict =
        districtFilter === "All" || issue.district === districtFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory &&
        matchesDistrict
      );
    });
    setFilteredIssues(filtered);
  }, [
    searchTerm,
    statusFilter,
    priorityFilter,
    categoryFilter,
    districtFilter,
    issues,
  ]);

  // Status color mapping
  const getStatusColor = (status) => {
    const colors = {
      Open: "bg-red-100 text-red-800",
      "In Progress": "bg-blue-100 text-blue-800",
      "Under Review": "bg-yellow-100 text-yellow-800",
      Resolved: "bg-green-100 text-green-800",
      Closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  // Priority color mapping
  const getPriorityColor = (priority) => {
    const colors = {
      High: "bg-red-100 text-red-800 border-red-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Low: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[priority] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Update issue status
  const updateIssueStatus = (issueId, newStatus) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === issueId
          ? {
              ...issue,
              status: newStatus,
              ...(newStatus === "Resolved"
                ? { resolvedDate: new Date().toISOString().split("T")[0] }
                : {}),
            }
          : issue
      )
    );
  };

  // Delete issue
  const deleteIssue = (issueId) => {
    if (window.confirm("Are you sure you want to delete this issue?")) {
      setIssues((prevIssues) =>
        prevIssues.filter((issue) => issue.id !== issueId)
      );
    }
  };

  // Open issue details modal
  const openIssueModal = (issue, editing = false) => {
    setSelectedIssue(issue);
    setIsEditing(editing);
    setShowModal(true);
  };

  // Export data to CSV
  const exportToCSV = () => {
    const csvContent = [
      [
        "Issue ID",
        "Title",
        "Category",
        "Status",
        "Priority",
        "Location",
        "District",
        "Reporter",
        "Reported Date",
        "Assigned To",
      ],
      ...filteredIssues.map((issue) => [
        issue.id,
        issue.title,
        issue.category,
        issue.status,
        issue.priority,
        issue.location,
        issue.district,
        issue.reportedBy,
        issue.reportedDate,
        issue.assignedTo,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "civic_issues_report.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Civic Issues Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Government of Jharkhand - Administrative Panel
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download size={20} />
                Export CSV
              </button>
             
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Open Issues</p>
                <p className="text-2xl font-bold text-gray-900">
                  {issues.filter((issue) => issue.status === "Open").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <RefreshCw className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {
                    issues.filter((issue) => issue.status === "In Progress")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {issues.filter((issue) => issue.status === "Resolved").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <XCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Issues
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {issues.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search issues by title, description, location, or reporter..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="All">All Priority</option>
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
              >
                <option value="All">All Districts</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Issues Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reporter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredIssues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-start">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {issue.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {issue.category}
                          </div>
                          <div className="text-xs text-gray-400">
                            ID: {issue.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className={`px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                          issue.status
                        )}`}
                        value={issue.status}
                        onChange={(e) =>
                          updateIssueStatus(issue.id, e.target.value)
                        }
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(
                          issue.priority
                        )}`}
                      >
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin size={16} className="mr-1 text-gray-400" />
                        <div>
                          <div>{issue.location}</div>
                          <div className="text-xs text-gray-500">
                            {issue.district}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <User size={16} className="mr-1 text-gray-400" />
                        <div>
                          <div>{issue.reportedBy}</div>
                          <div className="text-xs text-gray-500">
                            {issue.reporterPhone}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar size={16} className="mr-1 text-gray-400" />
                        {issue.reportedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openIssueModal(issue, false)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => openIssueModal(issue, true)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit Issue"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => deleteIssue(issue.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Issue"
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

          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                No issues found matching your criteria
              </div>
            </div>
          )}
        </div>

        {/* Issue Details Modal */}
        {showModal && selectedIssue && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  className="absolute inset-0 bg-gray-500 opacity-10"
                  onClick={() => setShowModal(false)}
                ></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {isEditing ? "Edit Issue" : "Issue Details"}
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <XCircle size={24} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Issue ID
                        </label>
                        <div className="text-sm text-gray-900">
                          {selectedIssue.id}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue={selectedIssue.title}
                          />
                        ) : (
                          <div className="text-sm text-gray-900">
                            {selectedIssue.title}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        {isEditing ? (
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            rows="3"
                            defaultValue={selectedIssue.description}
                          ></textarea>
                        ) : (
                          <div className="text-sm text-gray-900">
                            {selectedIssue.description}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                          </label>
                          <div className="text-sm text-gray-900">
                            {selectedIssue.category}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                          </label>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                              selectedIssue.priority
                            )}`}
                          >
                            {selectedIssue.priority}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        {isEditing ? (
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue={selectedIssue.status}
                          >
                            {statuses.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              selectedIssue.status
                            )}`}
                          >
                            {selectedIssue.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <div className="text-sm text-gray-900">
                          {selectedIssue.location}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            District
                          </label>
                          <div className="text-sm text-gray-900">
                            {selectedIssue.district}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ward
                          </label>
                          <div className="text-sm text-gray-900">
                            {selectedIssue.ward}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Constituency
                        </label>
                        <div className="text-sm text-gray-900">
                          {selectedIssue.constituency}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reported By
                        </label>
                        <div className="text-sm text-gray-900">
                          <div>{selectedIssue.reportedBy}</div>
                          <div className="text-gray-500">
                            {selectedIssue.reporterPhone}
                          </div>
                          <div className="text-gray-500">
                            {selectedIssue.reporterEmail}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Reported Date
                          </label>
                          <div className="text-sm text-gray-900">
                            {selectedIssue.reportedDate}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Estimated Resolution
                          </label>
                          <div className="text-sm text-gray-900">
                            {selectedIssue.estimatedResolution}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Assigned To
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue={selectedIssue.assignedTo}
                          />
                        ) : (
                          <div className="text-sm text-gray-900">
                            {selectedIssue.assignedTo}
                          </div>
                        )}
                      </div>

                      {selectedIssue.resolvedDate && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Resolved Date
                          </label>
                          <div className="text-sm text-green-600">
                            {selectedIssue.resolvedDate}
                          </div>
                        </div>
                      )}

                      {selectedIssue.images.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Attached Images
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {selectedIssue.images.map((image, index) => (
                              <div
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-600"
                              >
                                {image}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {isEditing ? "Save Changes" : "Close"}
                  </button>
                  {isEditing && (
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
