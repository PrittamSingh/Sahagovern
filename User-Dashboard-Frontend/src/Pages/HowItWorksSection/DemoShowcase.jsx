// DemoShowcase.jsx

import { ArrowRight, Play, MessageSquare, CheckCircle, Award } from "lucide-react";

const DemoShowcase = () => (
  <div className="relative max-w-5xl mx-auto mb-16">
    <div className="bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95 rounded-3xl p-12 border border-blue-200/20 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse" />

      {/* Floating elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-bounce" />
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-green-400/20 rounded-full blur-2xl animate-pulse" />

      <div className="relative z-10 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white font-semibold">LIVE DEMO</span>
        </div>

        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Experience the{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Power
          </span>{" "}
          in Action
        </h3>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
          Watch how citizens across India are transforming their communities
          with just a few clicks. From problem to solution in minutes, not
          months.
        </p>

        {/* Before / After Showcase */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Before */}
            <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
              <div className="text-red-300 text-sm font-semibold mb-2">BEFORE</div>
              <div className="text-white font-bold">Days of Waiting</div>
              <div className="text-red-200 text-sm">Complex paperwork, no updates</div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-4">
                <ArrowRight className="text-white" size={24} />
              </div>
            </div>

            {/* After */}
            <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
              <div className="text-green-300 text-sm font-semibold mb-2">
                WITH सहgovern
              </div>
              <div className="text-white font-bold">Minutes to Submit</div>
              <div className="text-green-200 text-sm">AI assistance, instant tracking</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center gap-3">
              <Play size={20} />
              Watch Live Demo
            </span>
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
            <MessageSquare size={20} />
            Try Interactive Tutorial
          </button>
        </div>

        {/* Proof */}
        <div className="mt-8 flex justify-center gap-6 text-blue-200">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} />
            <span className="text-sm">500+ Cities</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} />
            <span className="text-sm">Government Approved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DemoShowcase;
