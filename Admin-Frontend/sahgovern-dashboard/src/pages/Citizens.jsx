import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  Users,
  MapPin,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  FileText,
} from "lucide-react";

// Enhanced Jharkhand citizens dummy data (removed avatar field)
const jharkahandCitizens = [
  {
    id: 1,
    name: "Ramesh Kumar Singh",
    email: "ramesh.singh@gmail.com",
    mobile: "+91 9876543210",
    address: "Ranchi, Jharkhand",
    district: "Ranchi",
    issuesReported: 5,
    issuesResolved: 4,
    lastActive: "2025-09-15",
    joinDate: "2024-01-15",
    status: "Active",
    category: "Regular Citizen",
  },
  {
    id: 2,
    name: "Sunita Devi Mahato",
    email: "sunita.mahato@yahoo.com",
    mobile: "+91 8765432109",
    address: "Jamshedpur, Jharkhand",
    district: "East Singhbhum",
    issuesReported: 3,
    issuesResolved: 2,
    lastActive: "2025-09-17",
    joinDate: "2023-11-20",
    status: "Active",
    category: "Community Leader",
  },
  {
    id: 3,
    name: "Arjun Oraon",
    email: "arjun.oraon@hotmail.com",
    mobile: "+91 7654321098",
    address: "Chaibasa, Jharkhand",
    district: "West Singhbhum",
    issuesReported: 8,
    issuesResolved: 6,
    lastActive: "2025-09-16",
    joinDate: "2024-03-10",
    status: "Active",
    category: "Activist",
  },
  {
    id: 4,
    name: "Priya Kumari Sinha",
    email: "priya.sinha@gmail.com",
    mobile: "+91 6543210987",
    address: "Dhanbad, Jharkhand",
    district: "Dhanbad",
    issuesReported: 2,
    issuesResolved: 2,
    lastActive: "2025-09-18",
    joinDate: "2024-06-05",
    status: "Active",
    category: "Regular Citizen",
  },
  {
    id: 5,
    name: "Deepak Munda",
    email: "deepak.munda@outlook.com",
    mobile: "+91 5432109876",
    address: "Khunti, Jharkhand",
    district: "Khunti",
    issuesReported: 12,
    issuesResolved: 8,
    lastActive: "2025-09-14",
    joinDate: "2023-08-18",
    status: "Active",
    category: "Community Leader",
  },
  {
    id: 6,
    name: "Kavita Kumari Das",
    email: "kavita.das@gmail.com",
    mobile: "+91 4321098765",
    address: "Bokaro, Jharkhand",
    district: "Bokaro",
    issuesReported: 4,
    issuesResolved: 3,
    lastActive: "2025-09-12",
    joinDate: "2024-02-28",
    status: "Inactive",
    category: "Regular Citizen",
  },
  {
    id: 7,
    name: "Santosh Kumar Yadav",
    email: "santosh.yadav@rediffmail.com",
    mobile: "+91 3210987654",
    address: "Deoghar, Jharkhand",
    district: "Deoghar",
    issuesReported: 6,
    issuesResolved: 5,
    lastActive: "2025-09-17",
    joinDate: "2023-12-12",
    status: "Active",
    category: "Regular Citizen",
  },
  {
    id: 8,
    name: "Anita Tirkey",
    email: "anita.tirkey@gmail.com",
    mobile: "+91 2109876543",
    address: "Simdega, Jharkhand",
    district: "Simdega",
    issuesReported: 9,
    issuesResolved: 7,
    lastActive: "2025-09-16",
    joinDate: "2024-04-22",
    status: "Active",
    category: "Activist",
  },
  {
    id: 9,
    name: "Rajesh Prasad Gupta",
    email: "rajesh.gupta@yahoo.in",
    mobile: "+91 1098765432",
    address: "Hazaribagh, Jharkhand",
    district: "Hazaribagh",
    issuesReported: 7,
    issuesResolved: 4,
    lastActive: "2025-09-13",
    joinDate: "2023-09-30",
    status: "Active",
    category: "Regular Citizen",
  },
  {
    id: 10,
    name: "Meera Kumari Soren",
    email: "meera.soren@gmail.com",
    mobile: "+91 9087654321",
    address: "Dumka, Jharkhand",
    district: "Dumka",
    issuesReported: 11,
    issuesResolved: 9,
    lastActive: "2025-09-18",
    joinDate: "2024-01-08",
    status: "Active",
    category: "Community Leader",
  },
  {
    id: 11,
    name: "Vinod Kumar Mahto",
    email: "vinod.mahto@hotmail.com",
    mobile: "+91 8976543210",
    address: "Giridih, Jharkhand",
    district: "Giridih",
    issuesReported: 3,
    issuesResolved: 1,
    lastActive: "2025-09-10",
    joinDate: "2024-07-14",
    status: "Inactive",
    category: "Regular Citizen",
  },
  {
    id: 12,
    name: "Sudha Kerketta",
    email: "sudha.kerketta@outlook.com",
    mobile: "+91 7865432109",
    address: "Gumla, Jharkhand",
    district: "Gumla",
    issuesReported: 5,
    issuesResolved: 5,
    lastActive: "2025-09-17",
    joinDate: "2023-10-25",
    status: "Active",
    category: "Activist",
  },
];

// Statistics component
const StatCard = ({ title, value, icon: Icon, color, change, changeType }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="text-white" size={24} />
      </div>
      {change && (
        <div
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-green-500" : "text-red-500"
          }`}
        >
          {changeType === "positive" ? "+" : ""}
          {change}
        </div>
      )}
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  </div>
);

// Action button component
const ActionButton = ({ icon: Icon, label, onClick, variant = "default" }) => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600 transition-colors";
  const variants = {
    default: "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
    danger: "text-red-600 hover:text-red-700 hover:bg-red-50",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      <Icon size={18} />
      {label}
    </button>
  );
};

export default function Citizens() {
  const [citizens] = useState(jharkahandCitizens);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique districts for filter
  const districts = [...new Set(citizens.map((citizen) => citizen.district))];

  // Filter citizens based on search and filters
  const filteredCitizens = useMemo(() => {
    return citizens.filter((citizen) => {
      const matchesSearch =
        citizen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        citizen.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        citizen.mobile.includes(searchTerm);

      const matchesDistrict =
        selectedDistrict === "all" || citizen.district === selectedDistrict;
      const matchesStatus =
        selectedStatus === "all" || citizen.status === selectedStatus;
      const matchesCategory =
        selectedCategory === "all" || citizen.category === selectedCategory;

      return (
        matchesSearch && matchesDistrict && matchesStatus && matchesCategory
      );
    });
  }, [
    citizens,
    searchTerm,
    selectedDistrict,
    selectedStatus,
    selectedCategory,
  ]);

  // Calculate statistics
  const totalCitizens = citizens.length;
  const activeCitizens = citizens.filter((c) => c.status === "Active").length;
  const totalIssues = citizens.reduce((sum, c) => sum + c.issuesReported, 0);
  const avgIssuesPerCitizen = (totalIssues / totalCitizens).toFixed(1);

  const getStatusColor = (status) => {
    return status === "Active"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Regular Citizen": "text-blue-600 bg-blue-100",
      "Community Leader": "text-purple-600 bg-purple-100",
      Activist: "text-orange-600 bg-orange-100",
    };
    return colors[category] || "text-gray-600 bg-gray-100";
  };

  // Generate initials for display instead of photos
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Citizens Management
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Manage and monitor citizen engagement in Jharkhand
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ActionButton icon={Download} label="Export Data" />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Citizens"
            value={totalCitizens.toLocaleString()}
            icon={Users}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            change="12%"
            changeType="positive"
          />
          <StatCard
            title="Active Citizens"
            value={activeCitizens.toLocaleString()}
            icon={CheckCircle}
            color="bg-gradient-to-br from-green-500 to-green-600"
            change="8%"
            changeType="positive"
          />
          <StatCard
            title="Total Issues Reported"
            value={totalIssues.toLocaleString()}
            icon={AlertCircle}
            color="bg-gradient-to-br from-orange-500 to-orange-600"
            change="15%"
            changeType="positive"
          />
          <StatCard
            title="Avg Issues per Citizen"
            value={avgIssuesPerCitizen}
            icon={FileText}
            color="bg-gradient-to-br from-purple-500 to-purple-600"
            change="3%"
            changeType="positive"
          />
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search citizens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* District Filter */}
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="all">All Districts</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="all">All Categories</option>
              <option value="Regular Citizen">Regular Citizen</option>
              <option value="Community Leader">Community Leader</option>
              <option value="Activist">Activist</option>
            </select>
          </div>
        </div>

        {/* Citizens Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Citizens List ({filteredCitizens.length} of {totalCitizens})
              </h3>
              <div className="flex items-center gap-2">
                {/* <ActionButton icon={Filter} label="More Filters" /> */}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Citizen
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Contact
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Location
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Issues
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCitizens.map((citizen) => (
                  <tr
                    key={citizen.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                          {getInitials(citizen.name)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {citizen.name}
                          </p>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                              citizen.category
                            )}`}
                          >
                            {citizen.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail size={14} />
                          {citizen.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} />
                          {citizen.mobile}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <div>
                          <p className="font-medium">{citizen.district}</p>
                          <p className="text-xs text-gray-500">
                            {citizen.address}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">
                          {citizen.issuesReported} reported
                        </p>
                        <p className="text-green-600">
                          {citizen.issuesResolved} resolved
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          citizen.status
                        )}`}
                      >
                        {citizen.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={14} />
                        {new Date(citizen.lastActive).toLocaleDateString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCitizens.length === 0 && (
            <div className="py-12 text-center">
              <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No citizens found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
