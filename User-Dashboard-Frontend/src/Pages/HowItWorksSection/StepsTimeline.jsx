// StepsTimeline.jsx

import { ArrowRight } from "lucide-react";

const StepsTimeline = ({ steps, isVisible }) => (
  <div className="hidden lg:block mb-20">
    <h3 className="text-3xl font-bold text-center text-gray-800 mb-16">
      Simple 5-Step Process
    </h3>

    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 rounded-full" />

      <div className="grid grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative transition-all duration-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Step Circle */}
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                <step.icon className="text-white" size={28} />
              </div>
              <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700">
                {step.id}
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`${step.bgColor} rounded-xl p-6 border hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="absolute top-8 -right-4 z-10">
                <ArrowRight className="text-gray-400" size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StepsTimeline;
