// ReportPreview.jsx

import React from "react";
import { FileText, LogIn, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; //perform
const ReportPreview = () => {
  const navigate = useNavigate(); //perform
  return (
    <section
      id="report-preview"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Report a Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The seamless bridge between citizens and government bodies, enabling
            transparent, efficient, and responsive governance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Issues Resolved</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="text-orange-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Active Complaints</div>
          </div>
        </div>

        {/* Main Reporting Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
            <FileText className="mx-auto mb-4" size={56} />
            <h3 className="text-3xl font-bold mb-2">
              Citizen Reporting System
            </h3>
            <p className="text-blue-100 text-lg">
              Your voice matters. Report issues and track their progress in
              real-time.
            </p>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  How it works:
                </h4>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-600">
                    Capture your issue with photos and description
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-600">
                    Submit securely to concerned authorities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-600">
                    Track progress and receive real-time updates
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Features:
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={18} />{" "}
                    Photo & video attachments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={18} />{" "}
                    GPS location tagging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={18} />{" "}
                    Real-time status updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={18} />{" "}
                    Anonymous reporting option
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate("/authPage")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                <LogIn size={20} className="inline mr-3" />
                Login / Register to Report
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Secure authentication required for issue tracking and updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReportPreview;
