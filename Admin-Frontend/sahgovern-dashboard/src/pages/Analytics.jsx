import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  BarChart2,
  Activity,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Filter,
  Camera,
  Smartphone,
  Navigation,
  MessageSquare,
  Route,
} from "lucide-react";

// Data from your data.js file
const issues = [
  {
    id: "ISS-001",
    title: "Pothole on Main Street",
    citizen: "John Doe",
    contact: "9876543210",
    category: "Roads",
    status: "Open",
    date: "2025-09-15",
  },
  {
    id: "ISS-002",
    title: "Water leakage in Sector 5",
    citizen: "Alice Smith",
    contact: "9123456780",
    category: "Water",
    status: "In Progress",
    date: "2025-09-14",
  },
  {
    id: "ISS-003",
    title: "Electricity outage in Block B",
    citizen: "Bob Johnson",
    contact: "9012345678",
    category: "Electricity",
    status: "Resolved",
    date: "2025-09-13",
  },
  {
    id: "ISS-004",
    title: "Garbage not collected in Sector 3",
    citizen: "Carol Lee",
    contact: "9234567890",
    category: "Waste",
    status: "Open",
    date: "2025-09-12",
  },
  {
    id: "ISS-005",
    title: "Street light not working",
    citizen: "David Kim",
    contact: "9345678901",
    category: "Electricity",
    status: "In Progress",
    date: "2025-09-11",
  },
];

const categories = [
  { name: "Roads", value: 420 },
  { name: "Water", value: 230 },
  { name: "Electricity", value: 300 },
  { name: "Waste", value: 290 },
];

// Enhanced data with more analytics for civic issues management
const issueTrends = [
  {
    date: "Sep 11",
    reports: 12,
    resolved: 8,
    photoReports: 10,
    voiceReports: 3,
  },
  {
    date: "Sep 12",
    reports: 18,
    resolved: 14,
    photoReports: 15,
    voiceReports: 5,
  },
  { date: "Sep 13", reports: 8, resolved: 6, photoReports: 7, voiceReports: 2 },
  {
    date: "Sep 14",
    reports: 22,
    resolved: 16,
    photoReports: 19,
    voiceReports: 7,
  },
  {
    date: "Sep 15",
    reports: 15,
    resolved: 11,
    photoReports: 13,
    voiceReports: 4,
  },
  {
    date: "Sep 16",
    reports: 25,
    resolved: 19,
    photoReports: 22,
    voiceReports: 8,
  },
  {
    date: "Sep 17",
    reports: 11,
    resolved: 9,
    photoReports: 10,
    voiceReports: 3,
  },
];

const performanceMetrics = [
  { month: "Jan", responseTime: 3.2, resolution: 78, satisfaction: 85 },
  { month: "Feb", responseTime: 2.8, resolution: 82, satisfaction: 88 },
  { month: "Mar", responseTime: 2.5, resolution: 85, satisfaction: 91 },
  { month: "Apr", responseTime: 2.2, resolution: 87, satisfaction: 89 },
  { month: "May", responseTime: 1.9, resolution: 91, satisfaction: 94 },
  { month: "Jun", responseTime: 1.8, resolution: 89, satisfaction: 92 },
];

const departmentRouting = [
  { name: "Public Works", autoRouted: 89, manualRouted: 11, accuracy: 94 },
  { name: "Sanitation", autoRouted: 92, manualRouted: 8, accuracy: 97 },
  { name: "Utilities", autoRouted: 87, manualRouted: 13, accuracy: 91 },
  { name: "Traffic Mgmt", autoRouted: 85, manualRouted: 15, accuracy: 89 },
];

const resolvedPending = [
  {
    name: "Resolved",
    value: issues.filter((i) => i.status === "Resolved").length,
  },
  {
    name: "In Progress",
    value: issues.filter((i) => i.status === "In Progress").length,
  },
  {
    name: "Pending",
    value: issues.filter((i) => i.status === "Pending").length,
  },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

// Custom tooltip components
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Metric card component
const MetricCard = ({ title, value, change, icon: Icon, trend, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="text-white" size={24} />
      </div>
      <div className="flex items-center gap-1 text-sm">
        {trend === "up" ? (
          <TrendingUp className="text-green-500" size={16} />
        ) : (
          <TrendingDown className="text-red-500" size={16} />
        )}
        <span
          className={`font-medium ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  </div>
);

// Chart container component
const ChartContainer = ({ title, children, icon: Icon, actions }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 bg-blue-100 rounded-lg">
              <Icon className="text-blue-600" size={20} />
            </div>
          )}
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default function Analytics() {
  const totalIssues = issues.length;
  const resolvedIssues = issues.filter((i) => i.status === "Resolved").length;
  const avgResolutionTime = 2.3; // hours
  const satisfactionRate = 92; // percentage

  const ActionButton = ({ icon: Icon, label }) => (
    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
      <Icon size={16} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="pb-2 text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Comprehensive insights into your system performance
            </p>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Reports Submitted"
            value={totalIssues.toLocaleString()}
            change="+12%"
            trend="up"
            icon={Smartphone}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <MetricCard
            title="Issues Resolved"
            value={resolvedIssues.toLocaleString()}
            change="+18%"
            trend="up"
            icon={CheckCircle}
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <MetricCard
            title="Avg Response Time"
            value={`${avgResolutionTime}h`}
            change="-15%"
            trend="up"
            icon={Clock}
            color="bg-gradient-to-br from-orange-500 to-orange-600"
          />
          <MetricCard
            title="Photo Reports"
            value="87%"
            change="+5%"
            trend="up"
            icon={Camera}
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Civic Reports Trends Chart */}
          <ChartContainer
            title="Mobile Reports & Resolution Trends"
            icon={Smartphone}
            actions={
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            }
          >
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={issueTrends}>
                <defs>
                  <linearGradient
                    id="reportsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="resolvedGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="photoGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="reports"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#reportsGradient)"
                  strokeWidth={3}
                  name="Mobile Reports"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#resolvedGradient)"
                  strokeWidth={3}
                  name="Issues Resolved"
                />
                <Area
                  type="monotone"
                  dataKey="photoReports"
                  stroke="#f59e0b"
                  fillOpacity={1}
                  fill="url(#photoGradient)"
                  strokeWidth={3}
                  name="Photo Reports"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Status Distribution Pie Chart */}
          <ChartContainer title="Issue Status Distribution" icon={BarChart2}>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={resolvedPending}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {resolvedPending.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Municipal Performance Metrics */}
        <ChartContainer title="Municipal Response Performance" icon={Activity}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="responseTime"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 6 }}
                name="Response Time (hours)"
              />
              <Line
                type="monotone"
                dataKey="resolution"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                name="Resolution Rate (%)"
              />
              <Line
                type="monotone"
                dataKey="satisfaction"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                name="Citizen Satisfaction (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Civic Issue Categories - Full Width */}
        <ChartContainer
          title="Civic Issue Categories by Report Volume"
          icon={Navigation}
        >
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={categories}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                fontSize={14}
                tickLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                content={<CustomTooltip />}
                formatter={(value) => [`${value} reports`, "Reports"]}
              />
              <Bar
                dataKey="value"
                fill="url(#civicBarGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient
                  id="civicBarGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.7} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>

          {/* Category insights */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-gray-50 rounded-lg p-3 text-center"
              >
                <div className="text-lg font-bold text-gray-900">
                  {category.value}
                </div>
                <div className="text-sm text-gray-600">{category.name}</div>
                <div className="text-xs text-blue-600 mt-1">
                  {(
                    (category.value /
                      categories.reduce((sum, c) => sum + c.value, 0)) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </div>
            ))}
          </div>
        </ChartContainer>
      </div>
    </div>
  );
}
