// AuthAccess.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { setShowAuth } from "../../redux/authSlice"; // ✅ import action

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Herosection from "../../Pages/Herosection/Herosection.jsx";
import Features from "../../Pages/Features/Features.jsx";
import HowItWorksSection from "../../Pages/HowItWorksSection/HowItWorksSection.jsx";
import ReportPreview from "../../Pages/Herosection/ReportPreview.jsx";
import DashboardPreview from "../../Pages/Herosection/DashboardPreview.jsx";

const AuthAccess = () => {
  const dispatch = useDispatch();

  // ✅ When login clicked, trigger Redux to show AuthPage
  const handleLoginClick = () => {
    dispatch(setShowAuth(true));
  };

  return (
    <>
      <Header onLoginClick={handleLoginClick} />
      <Herosection />
      <Features />
      <HowItWorksSection />
      <ReportPreview />
      <DashboardPreview />
      <Footer />
    </>
  );
};

export default AuthAccess;
