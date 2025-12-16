// Features.jsx

import {
  CheckCircle,
  Eye,
  MessageCircle,
  Zap,
  Award,
  Bell,
  ChevronRight,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: CheckCircle,
      title: "AI-Powered Issue Detection",
      description:
        "Report civic problems easily with AI that classifies and routes them to the right department.",
      moreDetails:
        "Our system uses AI/ML models to detect duplicates, auto-categorize issues like potholes, garbage, or streetlights, and forward them instantly to the correct municipal authority.",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50 border-blue-200",
    },
    {
      icon: Eye,
      title: "Real-Time Tracking",
      description:
        "Track every stage of your complaint with complete transparency and timely updates.",
      moreDetails:
        "Citizens get live notifications — report received, acknowledged, assigned to staff, under progress, and resolved — ensuring accountability at every step.",
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50 border-green-200",
    },
    {
      icon: MessageCircle,
      title: "Seamless Citizen–Government Communication",
      description:
        "Bridge the gap between citizens and officials with direct, feedback-driven communication.",
      moreDetails:
        "Instead of waiting endlessly, citizens receive acknowledgment and resolution updates, while staff can clarify issues directly when needed.",
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50 border-orange-200",
    },
    {
      icon: Zap,
      title: "Community Collaboration",
      description:
        "Empower communities to validate, upvote, and support local issues collectively.",
      moreDetails:
        "Users can view nearby problems, upvote genuine concerns, comment, and create community-driven visibility that helps governments prioritize pressing issues.",
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50 border-purple-200",
    },
    {
      icon: Award,
      title: "Data-Driven Governance",
      description:
        "Enable smarter decisions with analytics, trends, and performance insights.",
      moreDetails:
        "The dashboard provides heatmaps, response time analytics, and departmental performance metrics, helping authorities improve service delivery and accountability.",
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: Bell,
      title: "Smart Alerts & Notifications",
      description:
        "Stay updated on your reports and important community announcements.",
      moreDetails:
        "Get instant alerts on complaint progress, resolution status, and neighborhood-level updates like emergency notices, road closures, or sanitation drives.",
      color: "from-teal-600 to-teal-800",
      bgColor: "bg-teal-50 border-teal-200",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of civic engagement with our cutting-edge
            platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(feature)}
              className={`group relative p-8 rounded-xl ${feature.bgColor} border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}
              >
                <feature.icon className="text-white" size={24} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Short description */}
              <p className="text-gray-600">{feature.description}</p>

              {/* Chevron Indicator */}
              <div className="absolute bottom-4 right-4">
                <ChevronRight className="text-gray-700" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Feature Modal with Animation */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-5xl md:w-4/5 lg:w-3/4 rounded-xl shadow-xl relative p-10"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveFeature(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
              >
                <X size={24} />
              </button>

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${activeFeature.color} mb-6`}
              >
                <activeFeature.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {activeFeature.title}
              </h3>

              {/* Short description */}
              <p className="text-gray-600">{activeFeature.description}</p>

              {/* Full Details */}
              <p className="mt-4 text-gray-700 border-t border-gray-300 pt-4 text-lg leading-relaxed">
                {activeFeature.moreDetails}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
