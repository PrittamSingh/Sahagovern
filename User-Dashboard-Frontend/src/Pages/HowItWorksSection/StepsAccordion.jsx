// StepsAccordion.jsx

import { ChevronRight } from "lucide-react";

const StepsAccordion = ({ steps, activeStep, setActiveStep }) => (
  <div className="lg:hidden space-y-4 mb-20">
    {steps.map((step, index) => (
      <div
        key={step.id}
        className={`${step.bgColor} rounded-xl border overflow-hidden transition-all duration-300`}
      >
        <button
          onClick={() => setActiveStep(activeStep === index ? -1 : index)}
          className="w-full p-6 text-left flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}
            >
              <step.icon className="text-white" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-gray-500">
                  Step {step.id}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-800">{step.title}</h4>
            </div>
          </div>
          <ChevronRight
            className={`text-gray-500 transition-transform duration-200 ${
              activeStep === index ? "rotate-90" : ""
            }`}
            size={20}
          />
        </button>

        {activeStep === index && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 mb-4 leading-relaxed">
              {step.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0" />
                  {detail}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default StepsAccordion;
