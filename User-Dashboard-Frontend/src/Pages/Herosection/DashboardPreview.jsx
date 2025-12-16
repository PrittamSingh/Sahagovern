// DashboardPreview.jsx

import React from "react";
import { LayoutDashboard, ShieldCheck, LogIn, BarChart3, Users, Clock, TrendingUp, MapPin, Bell } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Authority Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of data-driven governance with our comprehensive dashboard designed for efficient issue management and citizen engagement.
          </p>
        </div>

        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Data-Driven Insights</h3>
            <p className="text-gray-600 text-center">Advanced analytics and performance metrics for informed decision-making</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Real-Time Tracking</h3>
            <p className="text-gray-600 text-center">Live status updates and progress monitoring across all departments</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Seamless Communication</h3>
            <p className="text-gray-600 text-center">Direct communication channels between citizens and authorities</p>
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white text-center">
            <LayoutDashboard className="mx-auto mb-4" size={56} />
            <h3 className="text-3xl font-bold mb-2">Smart Governance Dashboard</h3>
            <p className="text-green-100 text-lg">
              Centralized command center for efficient civic administration and citizen service delivery.
            </p>
          </div>
          
          <div className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
              {/* Dashboard Features */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Capabilities:</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Geographic Issue Mapping</h5>
                      <p className="text-gray-600 text-sm">Interactive maps with real-time issue visualization and hotspot identification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-green-100 text-green-600 rounded-lg p-2">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Performance Analytics</h5>
                      <p className="text-gray-600 text-sm">Comprehensive metrics on resolution times and citizen satisfaction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-purple-100 text-purple-600 rounded-lg p-2">
                      <Bell size={20} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Smart Alerts & Notifications</h5>
                      <p className="text-gray-600 text-sm">Intelligent prioritization system with automated workflow management</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Preview */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Dashboard Preview</h4>
                
                {/* Mini Dashboard Elements */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Active Issues</span>
                      <span className="text-2xl font-bold text-blue-600">247</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Resolved Today</span>
                      <span className="text-2xl font-bold text-green-600">89</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Response Time</span>
                      <span className="text-2xl font-bold text-orange-600">2.4h</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security Features */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Enterprise-Grade Security</h4>
                  <p className="text-gray-600">Multi-layer authentication and role-based access control</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <ShieldCheck className="text-green-600" size={24} />
                    <span className="font-medium">Secure Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <LayoutDashboard className="text-blue-600" size={24} />
                    <span className="font-medium">Real-time Sync</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg">
                <LogIn size={20} className="inline mr-3" />
                Authority Login
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Secure access for verified government officials and department heads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;