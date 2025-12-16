// HowItWorksSection.jsx

import {
  Smartphone,
  ClipboardList,
  MapPin,
  MessageSquare,
  CheckCircle,
  Users,
  BarChart,
  Shield,
} from "lucide-react";
import DemoShowcase from "./DemoShowcase";
import StepsTimeline from "./StepsTimeline";
import StepsAccordion from "./StepsAccordion";
import FeaturesGrid from "./FeaturesGrid";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Capture Issue",
      description:
        "Take a photo or record video of the issue directly from your phone.",
      details: [
        "Geo-tagging enabled",
        "Attach multiple files",
        "Add short description",
      ],
      icon: Smartphone,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Submit Report",
      description:
        "Send your issue directly to the concerned authority in just one tap.",
      details: [
        "Auto-routing to departments",
        "Offline mode with SMS fallback",
        "Instant confirmation",
      ],
      icon: ClipboardList,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      title: "Track Progress",
      description:
        "Stay updated on every step of your complaint resolution journey.",
      details: [
        "Real-time notifications",
        "Estimated resolution time",
        "Progress updates",
      ],
      icon: MapPin,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50",
    },
    {
      id: 4,
      title: "Authority Response",
      description:
        "Officials acknowledge and update the status of the issue transparently.",
      details: [
        "Direct communication",
        "Status categories",
        "Proof of work updates",
      ],
      icon: MessageSquare,
      color: "from-amber-500 to-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      id: 5,
      title: "Issue Resolved",
      description:
        "Once fixed, closure confirmation is shared with proof for transparency.",
      details: [
        "Photo evidence",
        "Resolution report",
        "Citizen feedback option",
      ],
      icon: CheckCircle,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Citizen Empowerment",
      description:
        "A platform built to give every citizen a voice in governance.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights",
      description:
        "Authorities get actionable insights for better city management.",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "End-to-end encryption and public accountability built-in.",
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple and intuitive interface for all age groups.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 text-center">
          How{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            सह
          </span>
          <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            govern
          </span>{" "}
          Works
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          सहgovern connects citizens with authorities in a transparent,
          efficient, and simple way.
        </p>

        {/* Sub-sections */}
        <DemoShowcase />
        <StepsTimeline steps={steps} isVisible={true} />
        <StepsAccordion
          steps={steps}
          activeStep={-1}
          setActiveStep={() => {}}
        />
        <FeaturesGrid features={features} />
      </div>
    </section>
  );
};

export default HowItWorksSection;
