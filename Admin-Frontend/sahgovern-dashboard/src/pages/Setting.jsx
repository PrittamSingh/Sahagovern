import { useState } from "react";
import { Shield, User, Lock, Bell, Users, Cog } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [userRole, setUserRole] = useState("admin"); // Change to "user" to see different view
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    notifications: true,
    darkMode: false,
    language: "en",
    autoSave: true,
    timezone: "Asia/Kolkata",
    dateFormat: "dd/mm/yyyy",
    soundEnabled: true,
    compactMode: false,
    // Civic Issue Settings
    civicReporting: true,
    govNotifications: true,
    district: "Dehradun",
    emergencyAlerts: true,
    publicMeetings: false,
    issueCategories: ["roads", "water", "electricity"],
  });

  const [adminSettings, setAdminSettings] = useState({
    systemMaintenance: false,
    userRegistration: true,
    dataRetention: "30",
    backupFrequency: "daily",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdminChange = (field, value) => {
    setAdminSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Settings saved successfully!");
    setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
  };

  const tabs = [
    { id: "general", label: "General", icon: Cog },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    ...(userRole === "admin"
      ? [
          { id: "admin", label: "Admin", icon: Shield },
          { id: "users", label: "Users", icon: Users },
        ]
      : []),
  ];

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={() => onClick(tab.id)}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 w-full text-left ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      <tab.icon size={20} />
      {tab.label}
    </button>
  );

  const InputField = ({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
      />
    </div>
  );

  const ToggleSwitch = ({ label, value, onChange, description }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
      <div className="flex-1">
        <label className="block text-sm font-semibold text-gray-800">
          {label}
        </label>
        {description && (
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 flex-shrink-0 ${
          value ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  const CheckboxGroup = ({
    label,
    options,
    selectedValues,
    onChange,
    description,
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      {description && <p className="text-xs text-gray-600">{description}</p>}
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={(e) => {
                const newValues = e.target.checked
                  ? [...selectedValues, option.value]
                  : selectedValues.filter((v) => v !== option.value);
                onChange(newValues);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const SelectField = ({ label, value, onChange, options }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  General Settings
                </h3>
                <p className="text-sm text-gray-600">
                  Manage your basic preferences
                </p>
              </div>
            </div>

            <SelectField
              label="Language"
              value={formData.language}
              onChange={(value) => handleInputChange("language", value)}
              options={[
                { value: "en", label: "English" },
                { value: "hi", label: "Hindi" },
              ]}
            />

            <SelectField
              label="Timezone"
              value={formData.timezone}
              onChange={(value) => handleInputChange("timezone", value)}
              options={[
                { value: "Asia/Kolkata", label: "India (IST)" },
                { value: "America/New_York", label: "New York (EST)" },
                { value: "Europe/London", label: "London (GMT)" },
                { value: "Asia/Dubai", label: "Dubai (GST)" },
                { value: "Asia/Singapore", label: "Singapore (SGT)" },
              ]}
            />

            <SelectField
              label="Date Format"
              value={formData.dateFormat}
              onChange={(value) => handleInputChange("dateFormat", value)}
              options={[
                { value: "dd/mm/yyyy", label: "DD/MM/YYYY" },
                { value: "mm/dd/yyyy", label: "MM/DD/YYYY" },
                { value: "yyyy-mm-dd", label: "YYYY-MM-DD" },
                { value: "dd-mm-yyyy", label: "DD-MM-YYYY" },
              ]}
            />

            <SelectField
              label="District/City (Uttarakhand)"
              value={formData.district}
              onChange={(value) => handleInputChange("district", value)}
              options={[
                { value: "Dehradun", label: "Dehradun" },
                { value: "Haridwar", label: "Haridwar" },
                { value: "Nainital", label: "Nainital" },
                { value: "Uttarkashi", label: "Uttarkashi" },
                { value: "Chamoli", label: "Chamoli" },
                { value: "Rudraprayag", label: "Rudraprayag" },
                { value: "Tehri Garhwal", label: "Tehri Garhwal" },
                { value: "Pauri Garhwal", label: "Pauri Garhwal" },
                { value: "Pithoragarh", label: "Pithoragarh" },
                { value: "Bageshwar", label: "Bageshwar" },
                { value: "Almora", label: "Almora" },
                { value: "Champawat", label: "Champawat" },
                { value: "Udham Singh Nagar", label: "Udham Singh Nagar" },
              ]}
            />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-800 mb-3">
                <Shield size={20} />
                <span className="font-semibold">
                  🏛️ Civic Engagement Settings
                </span>
              </div>

              <div className="space-y-4">
                <ToggleSwitch
                  label="Enable Civic Issue Reporting"
                  value={formData.civicReporting}
                  onChange={(value) =>
                    handleInputChange("civicReporting", value)
                  }
                  description="Allow reporting of local civic issues to authorities"
                />

                <ToggleSwitch
                  label="Government Notifications"
                  value={formData.govNotifications}
                  onChange={(value) =>
                    handleInputChange("govNotifications", value)
                  }
                  description="Receive updates from Uttarakhand government schemes and announcements"
                />

                <ToggleSwitch
                  label="Emergency Alerts"
                  value={formData.emergencyAlerts}
                  onChange={(value) =>
                    handleInputChange("emergencyAlerts", value)
                  }
                  description="Get alerts for natural disasters, road closures, and emergency situations"
                />

                <ToggleSwitch
                  label="Public Meeting Notifications"
                  value={formData.publicMeetings}
                  onChange={(value) =>
                    handleInputChange("publicMeetings", value)
                  }
                  description="Receive notifications about gram sabha meetings and public hearings"
                />

                <CheckboxGroup
                  label="Issue Categories to Track"
                  description="Select which types of civic issues you want to report and track"
                  selectedValues={formData.issueCategories}
                  onChange={(values) =>
                    handleInputChange("issueCategories", values)
                  }
                  options={[
                    { value: "roads", label: "Roads & Transportation" },
                    { value: "water", label: "Water Supply & Drainage" },
                    { value: "electricity", label: "Electricity & Power" },
                    { value: "waste", label: "Waste Management" },
                    { value: "healthcare", label: "Healthcare Services" },
                    { value: "education", label: "Education & Schools" },
                    { value: "environment", label: "Environment & Pollution" },
                    { value: "tourism", label: "Tourism & Infrastructure" },
                    { value: "agriculture", label: "Agriculture & Farming" },
                    { value: "disaster", label: "Disaster Management" },
                  ]}
                />
              </div>
            </div>

            <ToggleSwitch
              label="Auto Save"
              value={formData.autoSave}
              onChange={(value) => handleInputChange("autoSave", value)}
              description="Automatically save changes as you type"
            />

            <ToggleSwitch
              label="Sound Effects"
              value={formData.soundEnabled}
              onChange={(value) => handleInputChange("soundEnabled", value)}
              description="Enable sound notifications and feedback"
            />

            <ToggleSwitch
              label="Compact Mode"
              value={formData.compactMode}
              onChange={(value) => handleInputChange("compactMode", value)}
              description="Display interface in a more condensed layout"
            />
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Lock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Security Settings
                </h3>
                <p className="text-sm text-gray-600">
                  Keep your account secure
                </p>
              </div>
            </div>

            <InputField
              label="New Password"
              type="password"
              value={formData.password}
              onChange={(value) => handleInputChange("password", value)}
              placeholder="Enter new password"
            />

            <InputField
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(value) => handleInputChange("confirmPassword", value)}
              placeholder="Confirm new password"
            />

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-800 mb-2">
                <Shield size={20} />
                <span className="font-semibold">Password Requirements</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• At least 8 characters long</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Include at least one number</li>
                <li>• Include at least one special character</li>
              </ul>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Bell className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Notification Settings
                </h3>
                <p className="text-sm text-gray-600">
                  Control how you receive updates
                </p>
              </div>
            </div>

            <ToggleSwitch
              label="Email Notifications"
              value={formData.notifications}
              onChange={(value) => handleInputChange("notifications", value)}
              description="Receive updates via email"
            />

            <ToggleSwitch
              label="Push Notifications"
              value={true}
              onChange={() => {}}
              description="Get instant notifications on your device"
            />

            <ToggleSwitch
              label="Marketing Emails"
              value={false}
              onChange={() => {}}
              description="Receive promotional content and updates"
            />

            <ToggleSwitch
              label="SMS Notifications"
              value={true}
              onChange={() => {}}
              description="Receive important updates via SMS"
            />
          </div>
        );

      case "admin":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Admin Settings
                </h3>
                <p className="text-sm text-gray-600">
                  System administration controls
                </p>
              </div>
            </div>

            <ToggleSwitch
              label="System Maintenance Mode"
              value={adminSettings.systemMaintenance}
              onChange={(value) =>
                handleAdminChange("systemMaintenance", value)
              }
              description="Enable maintenance mode to prevent user access"
            />

            <ToggleSwitch
              label="User Registration"
              value={adminSettings.userRegistration}
              onChange={(value) => handleAdminChange("userRegistration", value)}
              description="Allow new users to register accounts"
            />

            <SelectField
              label="Data Retention Period (days)"
              value={adminSettings.dataRetention}
              onChange={(value) => handleAdminChange("dataRetention", value)}
              options={[
                { value: "7", label: "7 days" },
                { value: "30", label: "30 days" },
                { value: "90", label: "90 days" },
                { value: "365", label: "1 year" },
              ]}
            />

            <SelectField
              label="Backup Frequency"
              value={adminSettings.backupFrequency}
              onChange={(value) => handleAdminChange("backupFrequency", value)}
              options={[
                { value: "hourly", label: "Every Hour" },
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
              ]}
            />

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <Shield size={20} />
                <span className="font-semibold">⚠️ Admin Warning</span>
              </div>
              <p className="text-sm text-amber-700">
                Changes to admin settings will affect all users. Please review
                carefully before saving.
              </p>
            </div>
          </div>
        );

      case "users":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  User Management
                </h3>
                <p className="text-sm text-gray-600">
                  Manage system users and permissions
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">156</div>
                <div className="text-sm text-blue-800 font-medium">
                  Total Users
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600">142</div>
                <div className="text-sm text-green-800 font-medium">
                  Active Users
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">8</div>
                <div className="text-sm text-purple-800 font-medium">
                  Administrators
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
              <div className="px-6 py-4 bg-gray-100 border-b border-gray-300">
                <h4 className="font-semibold text-gray-900">Recent Users</h4>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  {
                    name: "Amit Sharma",
                    email: "amit.sharma@example.com",
                    role: "Admin",
                    status: "Active",
                  },
                  {
                    name: "Priya Verma",
                    email: "priya.verma@example.com",
                    role: "User",
                    status: "Active",
                  },
                  {
                    name: "Rohit Kumar",
                    email: "rohit.kumar@example.com",
                    role: "User",
                    status: "Inactive",
                  },
                  {
                    name: "Neha Singh",
                    email: "neha.singh@example.com",
                    role: "Moderator",
                    status: "Active",
                  },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-700 px-2 py-1 bg-gray-100 rounded-lg">
                        {user.role}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage your account and system preferences
          </p>
          {userRole === "admin" && (
            <div className="flex items-center gap-2 mt-4 bg-purple-100 px-4 py-2 rounded-lg inline-flex">
              <Shield className="text-purple-600" size={18} />
              <span className="text-sm font-medium text-purple-700">
                Administrator Access
              </span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <nav className="space-y-3">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    isActive={activeTab === tab.id}
                    onClick={setActiveTab}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {renderTabContent()}

                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    onClick={() => {
                      setFormData({
                        password: "",
                        confirmPassword: "",
                        notifications: true,
                        darkMode: false,
                        language: "en",
                        autoSave: true,
                        timezone: "Asia/Kolkata",
                        dateFormat: "dd/mm/yyyy",
                        soundEnabled: true,
                        compactMode: false,
                        civicReporting: true,
                        govNotifications: true,
                        district: "Dehradun",
                        emergencyAlerts: true,
                        publicMeetings: false,
                        issueCategories: ["roads", "water", "electricity"],
                      });
                      setAdminSettings({
                        systemMaintenance: false,
                        userRegistration: true,
                        dataRetention: "30",
                        backupFrequency: "daily",
                      });
                    }}
                  >
                    Reset All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
