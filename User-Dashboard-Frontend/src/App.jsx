// App.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthUser,
  setUserProfile,
  setSelectedUser,
} from "./redux/authSlice";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Herosection from "./Pages/Herosection/Herosection.jsx";
import Features from "./Pages/Features/Features.jsx";
import HowItWorksSection from "./Pages/HowItWorksSection/HowItWorksSection.jsx";
import ReportPreview from "./Pages/Herosection/ReportPreview.jsx";
import DashboardPreview from "./Pages/Herosection/DashboardPreview.jsx";
import AuthPage from "./Components/AuthCredentials/AuthPage.jsx";
import SocialCivicPlatform from "./Pages/SocialCivicPlatform/SocialCivicPlatform.jsx";
import AuthAccess from "./Components/AuthCredentials/AuthAccess.jsx";
import Home from "./Pages/Home/Home.jsx";

const App = () => {
  const dispatch = useDispatch();

  // 👇 get auth state from Redux
  const authUser = useSelector((state) => state.auth.user);
  const showAuth = useSelector((state) => state.auth.showAuth);

  // 👇 actions
  const handleAuthToggle = () => {
    dispatch(setSelectedUser(null)); // optional reset
    dispatch(setUserProfile(null)); // optional reset
    dispatch({ type: "auth/showAuth", payload: true }); // we’ll add showAuth in slice
  };

  const handleBackToLanding = () => {
    dispatch({ type: "auth/showAuth", payload: false });
  };

  const handleLoginSuccess = (userData) => {
    dispatch(setAuthUser(userData)); // store user in redux
    dispatch({ type: "auth/showAuth", payload: false });
  };

  return (
    <div>
      {authUser ? (
        // 👇 show Home page after login
        <Home />
      ) : showAuth ? (
        // 👇 login/signup page
        <AuthPage
          onBack={handleBackToLanding}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        // 👇 landing page with login access
        <>
          <AuthAccess onLoginClick={handleAuthToggle} />
          {/* <SocialCivicPlatform /> */}
          {/* 
          <Header onLoginClick={handleAuthToggle} />
          <Herosection />
          <Features />
          <HowItWorksSection />
          <ReportPreview />
          <DashboardPreview />
          <Footer /> 
          */}
        </>
      )}
    </div>
  );
};

export default App;


// // App.jsx

// import React, { useState } from 'react';
// import Header from './Components/Header/Header.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import Herosection from './Pages/Herosection/Herosection.jsx';
// import Features from './Pages/Features/Features.jsx';
// import HowItWorksSection from './Pages/HowItWorksSection/HowItWorksSection.jsx';
// import ReportPreview from './Pages/Herosection/ReportPreview.jsx';
// import DashboardPreview from './Pages/Herosection/DashboardPreview.jsx';
// import AuthPage from './Components/AuthCredentials/AuthPage.jsx';
// import SocialCivicPlatform from './Pages/SocialCivicPlatform/SocialCivicPlatform.jsx';
// import AuthAccess from './Components/AuthCredentials/AuthAccess.jsx';
// import Home from './Pages/Home/Home.jsx';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // login status
//   const [showAuth, setShowAuth] = useState(false); // auth modal/page toggle

//   const handleAuthToggle = () => {
//     setShowAuth(true);
//   };

//   const handleBackToLanding = () => {
//     setShowAuth(false);
//   };

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true);
//     setShowAuth(false);
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         // 👇 show Home page after login
//         <Home />
//       ) : showAuth ? (
//         // 👇 login/signup page
//         <AuthPage onBack={handleBackToLanding} onLoginSuccess={handleLoginSuccess} />
//       ) : (
//         // 👇 landing page with login access
//         <>
//           <AuthAccess onLoginClick={handleAuthToggle} />
//           {/* <SocialCivicPlatform /> */}
//           {/* 
//           <Header onLoginClick={handleAuthToggle} />
//           <Herosection />
//           <Features />
//           <HowItWorksSection />
//           <ReportPreview />
//           <DashboardPreview />
//           <Footer /> 
//           */}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
