// Herosection.jsx

import { Bell, CheckCircle, ChevronRight, Star, TrendingUp, Users } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Empowering{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Indian Citizens
              </span>
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full" />
            </span>
          </h1>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-12">
            Connecting{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Authorities
              </span>
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full" />
            </span>
          </h2>
        </div>

        <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
          The seamless bridge between citizens and government bodies, enabling{" "}
          <span className="text-blue-700 font-semibold">transparent</span>,{" "}
          <span className="text-green-700 font-semibold">efficient</span>, and{" "}
          <span className="text-orange-700 font-semibold">responsive</span>{" "}
          governance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() =>
              document
                .getElementById("report")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 text-white font-bold text-xl px-12 py-4 rounded-lg shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-2 border-blue-600/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Report a Problem
              <ChevronRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="text-blue-700" size={20} />
              <span className="font-semibold text-gray-800">10K+</span> Citizens
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-700" size={20} />
              <span className="font-semibold text-gray-800">98%</span> Success
              Rate
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              number: "50K+",
              label: "Issues Resolved",
              icon: CheckCircle,
              color: "text-green-700",
            },
            {
              number: "24/7",
              label: "Support Available",
              icon: Bell,
              color: "text-blue-700",
            },
            {
              number: "500+",
              label: "Cities Connected",
              icon: Star,
              color: "text-orange-700",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-110 transition-all duration-300"
            >
              <stat.icon
                className={`${stat.color} mx-auto mb-4 group-hover:animate-bounce`}
                size={32}
              />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
