// Header.jsx

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowAuth } from "../../redux/authSlice"; // ✅ redux action

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(setShowAuth(true)); // ✅ open auth page
    setIsMenuOpen(false); // close menu if on mobile
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 top-0 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                सह
              </span>
              <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                govern
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Features", "How it Works", "Report Preview", "Dashboard Preview"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group text-gray-700 hover:text-blue-800 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-45% via-blue-400 to-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={handleLoginClick}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-600/30 font-semibold"
            >
              Login / Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 space-y-4 shadow-lg">
            {["Features", "How it Works", "Report", "Dashboard"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block text-gray-700 hover:text-blue-800 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleLoginClick}
              className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Login / Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;


// // Header.jsx

// import { Menu, X } from "lucide-react";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; //perform
// const Header = ({ onLoginClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate(); //perform
//   return (
//     <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 top-0 shadow-sm">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 सह
//               </span>
//               <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
//                 govern
//               </span>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {[
//               "Features",
//               "How it Works",
//               "Report Preview",
//               "Dashboard Preview",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="relative group text-gray-700 hover:text-blue-800 transition-all duration-300 transform hover:scale-105 font-medium"
//               >
//                 {item}
//                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-45% via-blue-400 to-green-400 group-hover:w-full transition-all duration-300" />
//               </a>
//             ))}
//             <button
//               onClick={() => {
//                 onLoginClick();
//                 navigate("/authPage");
//               }}
//               className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-600/30 font-semibold"
//             >
//               Login / Signup
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 space-y-4 shadow-lg">
//             {["Features", "How it Works", "Report", "Dashboard"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(" ", "-")}`}
//                 className="block text-gray-700 hover:text-blue-800 transition-colors py-2 font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <button
//               onClick={() => navigate("/authPage")}
//               className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
//             >
//               Login / Signup
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;
