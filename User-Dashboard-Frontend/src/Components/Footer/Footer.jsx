// Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-[#0A2E4D] text-gray-200 border-t border-gray-600">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-4xl font-bold text-blue-500">सह</span>
            <span className="text-4xl font-bold text-green-500">govern</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging the gap between citizens and governance for a better tomorrow.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300 text-sm sm:text-base">
          {[
            "Features",
            "How it Works",
            "About Us",
            "Privacy Policy",
            "Terms of Service",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2025 सहgovern. All Rights Reserved.  
            <br className="sm:hidden" /> Made with ❤️ for India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
