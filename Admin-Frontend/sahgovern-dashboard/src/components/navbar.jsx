import { useState } from "react";
import {
  Menu,
  X,
  Bell,
  User,
  LogOut,
  ChevronDown,
  Shield,
  Search,
  UserPlus,
  BarChart3,
} from "lucide-react";

export default function Navbar({ userName = "Admin", onMenuToggle }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [quickStats, setQuickStats] = useState({
    totalIssues: 127,
    activeUsers: 1843,
    resolvedToday: 15,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onMenuToggle) {
      onMenuToggle(!isMobileMenuOpen);
    }
  };

  const notifications = [
    {
      id: 1,
      title: "New issue reported in Bhopal",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Issue resolved in Indore",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      title: "Weekly report available",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 4,
      title: "System maintenance scheduled",
      time: "1 day ago",
      unread: false,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Mobile menu button + Logo */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h1 className="hidden sm:block text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-green-700 transition-all duration-300 cursor-default">
                  सहGovern Admin
                </h1>
                <h1 className="sm:hidden text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  सहGovern
                </h1>
              </div>
            </div>

            {/* Right side - Quick Stats, Search, Notifications, Profile */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Stats - Desktop Only */}
              {/* <div className="hidden lg:flex items-center gap-4 mr-4 px-4 py-2 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {quickStats.totalIssues}
                  </span>
                  <span className="text-xs text-gray-500">Issues</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {quickStats.activeUsers}
                  </span>
                  <span className="text-xs text-gray-500">Users</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {quickStats.resolvedToday}
                  </span>
                  <span className="text-xs text-gray-500">Resolved</span>
                </div>
              </div> */}

              {/* Search */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Search className="w-5 h-5" />
                </button>

                Search dropdown
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200 p-4 z-50 transform animate-in slide-in-from-top-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search issues, users, departments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        autoFocus
                      />
                    </div>
                    {searchQuery && (
                      <div className="mt-3 space-y-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          Quick Actions
                        </div>
                        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                          <UserPlus className="w-4 h-4" />
                          <span>Add new user</span>
                        </button>
                        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                          <BarChart3 className="w-4 h-4" />
                          <span>View analytics</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div> */}
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    {notifications.filter((n) => n.unread).length}
                  </span>
                </button>

                {/* Notifications dropdown */}
                {isNotificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 transform animate-in slide-in-from-top-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-blue-50 cursor-pointer border-l-4 transition-all duration-200 ${
                            notification.unread
                              ? "border-l-blue-500 bg-blue-50/30"
                              : "border-l-transparent hover:border-l-blue-200"
                          }`}
                        >
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-green-700 font-medium transition-all duration-200">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Button */}
              <div className="relative">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center gap-2 p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold text-sm">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium">
                    {userName}
                  </span>
                  <ChevronDown className="w-4 h-4 hidden sm:block" />
                </button>

                {/* Profile dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 transform animate-in slide-in-from-top-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {userName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {userName}
                          </p>
                          <p className="text-sm text-gray-500">
                            System Administrator
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                        <User className="w-4 h-4" />
                        <span>View Profile</span>
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                        <BarChart3 className="w-4 h-4" />
                        <span>Admin Dashboard</span>
                      </button>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200">
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white/95 backdrop-blur-2xl shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  सहGovern Admin
                </h2>
              </div>
            </div>

            {/* Mobile User Info & Actions */}
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{userName}</p>
                  <p className="text-sm text-gray-500">Administrator</p>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="space-y-2">
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                  <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                  <Bell className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Notifications</span>
                  <span className="ml-auto bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full px-2 py-1 animate-pulse shadow-lg">
                    {notifications.filter((n) => n.unread).length}
                  </span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                  <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Add User</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                  <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Analytics</span>
                </button>
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Profile</span>
                </button>
              </div>

              {/* Sign Out */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-3 w-full px-3 py-3 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 group">
                  <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside handlers */}
      {(isProfileDropdownOpen || isNotificationOpen || isSearchOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsProfileDropdownOpen(false);
            setIsNotificationOpen(false);
            setIsSearchOpen(false);
          }}
        />
      )}
    </>
  );
}
