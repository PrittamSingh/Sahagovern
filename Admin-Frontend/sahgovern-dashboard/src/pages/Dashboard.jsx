import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

// Import icons from Lucide React
import {
  ClipboardList,
  AlertCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Activity,
  BarChart3,
  BarChart2,
  IndianRupee,
  Camera,
  Navigation,
  Smartphone,
  MessageSquare,
} from "lucide-react";

// Civic Issues Management System Data
const summary = {
  total: 2847,
  open: 523,
  inProgress: 1165,
  resolved: 1159,
  totalCitizens: 12457,
  avgResolutionTime: 3.8, // days
  satisfactionRate: 91.7, // percentage
};

const categories = [
  { name: "Potholes", value: 487, trend: "+18%" },
  { name: "Street Lights", value: 356, trend: "+25%" },
  { name: "Overflowing Bins", value: 289, trend: "-5%" },
  { name: "Water Leakage", value: 234, trend: "+12%" },
  { name: "Broken Sidewalks", value: 198, trend: "+7%" },
  { name: "Traffic Signals", value: 167, trend: "+15%" },
  { name: "Public Toilets", value: 134, trend: "+3%" },
  { name: "Parks & Recreation", value: 89, trend: "-8%" },
];

const monthlyData = [
  { month: "Mar", reports: 234, resolved: 198, photos: 456, voices: 78 },
  { month: "Apr", reports: 267, resolved: 234, photos: 523, voices: 89 },
  { month: "May", reports: 298, resolved: 267, photos: 587, voices: 95 },
  { month: "Jun", reports: 321, resolved: 289, photos: 634, voices: 102 },
  { month: "Jul", reports: 356, resolved: 321, photos: 698, voices: 118 },
  { month: "Aug", reports: 389, resolved: 345, photos: 756, voices: 125 },
  { month: "Sep", reports: 412, resolved: 378, photos: 823, voices: 134 },
];

const departmentData = [
  { department: "Public Works", reports: 1245, avgTime: "3.2 days", priority: "high" },
  { department: "Sanitation", reports: 687, avgTime: "2.8 days", priority: "medium" },
  { department: "Traffic Management", reports: 456, avgTime: "4.1 days", priority: "high" },
  { department: "Parks & Recreation", reports: 234, avgTime: "5.2 days", priority: "low" },
  { department: "Water Department", reports: 189, avgTime: "2.5 days", priority: "medium" },
  { department: "Electrical", reports: 156, avgTime: "3.7 days", priority: "medium" },
];

const recentActivities = [
  {
    id: 1,
    action: "Report resolved",
    description: "Pothole fixed on Main Street with photo verification",
    user: "Municipal Worker #247",
    time: "12 minutes ago",
    type: "success",
  },
  {
    id: 2,
    action: "New report submitted",
    description: "Broken street light reported with voice note",
    user: "Citizen Reporter",
    time: "28 minutes ago",
    type: "info",
  },
  {
    id: 3,
    action: "Auto-routed to department",
    description: "Overflowing trash bin → Sanitation Dept",
    user: "System",
    time: "45 minutes ago",
    type: "info",
  },
  {
    id: 4,
    action: "High priority alert",
    description: "Water main break reported in downtown area",
    user: "Emergency Response",
    time: "1 hour ago",
    type: "warning",
  },
];

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("7days");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("reports");

  const COLORS = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#f97316",
    "#84cc16",
  ];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const renderCustomizedLabel = ({ name, percent, value }) => {
    return `${name}: ${value} (${(percent * 100).toFixed(0)}%)`;
  };

  // Enhanced summary cards for civic issues
  const summaryCards = [
    {
      title: "Total Reports",
      value: summary.total,
      icon: <ClipboardList className="w-6 h-6" />,
      color: "indigo",
      change: "+15%",
      changeType: "increase",
    },
    {
      title: "Pending Reports",
      value: summary.open,
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange",
      change: "-12%",
      changeType: "decrease",
    },
    {
      title: "In Progress",
      value: summary.inProgress,
      icon: <Clock className="w-6 h-6" />,
      color: "blue",
      change: "+8%",
      changeType: "increase",
    },
    {
      title: "Resolved",
      value: summary.resolved,
      icon: <CheckCircle className="w-6 h-6" />,
      color: "green",
      change: "+22%",
      changeType: "increase",
    },
  ];

  const kpiCards = [
    {
      title: "Active Citizens",
      value: summary.totalCitizens,
      icon: <Smartphone className="w-6 h-6" />,
      color: "purple",
      suffix: "",
    },
    {
      title: "Avg Resolution",
      value: summary.avgResolutionTime,
      icon: <Activity className="w-6 h-6" />,
      color: "cyan",
      suffix: " days",
    },
    {
      title: "Citizen Satisfaction",
      value: summary.satisfactionRate,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "emerald",
      suffix: "%",
    },
    {
      title: "Photo Reports",
      value: "89%",
      icon: <Camera className="w-6 h-6" />,
      color: "amber",
      suffix: "",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 shadow-xl rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Civic Issues Dashboard</h1>
            <p className="text-blue-100 text-lg">
              Real-time Municipal Issue Tracking & Resolution
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={refreshData}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-xl shadow hover:bg-white/30 transition flex items-center space-x-2"
            >
              <RefreshCw
                className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow hover:bg-gray-50 transition flex items-center space-x-2 font-medium">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white shadow-sm rounded-xl p-4 border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="24hours">Last 24 Hours</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 3 Months</option>
            </select>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedMetric("reports")}
                className={`px-3 py-1 rounded-md text-sm transition ${
                  selectedMetric === "reports"
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Reports
              </button>
             
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Real-time updates • Auto-routing enabled
          </div>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-${card.color}-100`}>
                <div className={`text-${card.color}-600`}>{card.icon}</div>
              </div>
              <div
                className={`flex items-center space-x-1 text-sm ${
                  card.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <TrendingUp
                  className={`w-4 h-4 ${
                    card.changeType === "decrease" ? "rotate-180" : ""
                  }`}
                />
                <span>{card.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                {card.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-${card.color}-100`}>
                <div className={`text-${card.color}-600`}>{card.icon}</div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                {card.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {typeof card.value === "number"
                  ? card.value.toLocaleString()
                  : card.value}
                <span className="text-base text-gray-500">{card.suffix}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced Pie Chart for Issue Categories */}
        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <BarChart2 className="w-5 h-5 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900">
                Reports by Issue Type
              </h3>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Eye className="w-5 h-5" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={categories.slice(0, 6)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {categories.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} reports`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900">
                Monthly Reporting Trends
              </h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="reports"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.1}
                name="Reports Submitted"
              />
              <Area
                type="monotone"
                dataKey="resolved"
                stackId="2"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.1}
                name="Reports Resolved"
              />
              <Area
                type="monotone"
                dataKey="photos"
                stackId="3"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.1}
                name="Photo Reports"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Performance and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Department Response Performance
          </h3>
          <div className="space-y-4">
            {departmentData.map((dept, index) => (
              <div
                key={dept.department}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      dept.priority === "high"
                        ? "bg-red-400"
                        : dept.priority === "medium"
                        ? "bg-yellow-400"
                        : "bg-green-400"
                    }`}
                  ></div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {dept.department}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Avg Response: {dept.avgTime}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    {dept.reports}
                  </p>
                  <p className="text-sm text-gray-500">reports</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Live Activity Feed
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex space-x-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "success"
                      ? "bg-green-400"
                      : activity.type === "warning"
                      ? "bg-yellow-400"
                      : "bg-blue-400"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {activity.user}
                    </span>
                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Issue Category Comparison Bar Chart */}
      <div className="bg-white shadow-sm rounded-xl p-6 border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Civic Issue Categories Analysis
          </h3>
          <div className="flex space-x-2">
            <span className="text-sm text-gray-500">
              Trend comparison vs last month
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={categories}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              formatter={(value, name) => [`${value} reports`, name]}
              contentStyle={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="value" name="Total Reports" radius={[4, 4, 0, 0]}>
              {categories.map((entry, index) => (
                <Cell
                  key={`cell-bar-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}