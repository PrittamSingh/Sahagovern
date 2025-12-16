import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AuthToggle from "./AuthToggle";
import AuthMethodSelector from "./AuthMethodSelector";
import GoogleAuth from "./GoogleAuth";
import AuthForm from "./AuthForm";
import { Shield, CheckCircle } from "lucide-react";
import { sendOtp, verifyOtp, signup, login } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/authSlice"; // ✅ import redux action

const AuthPage = ({ onBack, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState("email"); // 'email' | 'phone' | 'google'
  const [showOtp, setShowOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    city: "",
    state: "",
    otp: "",
  });

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  // ✅ Send OTP with backend
  const handleSendOtp = async () => {
    if (!formData.phonenumber) {
      setError("Enter phone number first");
      return;
    }
    try {
      await sendOtp({ phonenumber: formData.phonenumber });
      setShowOtp(true);
      setOtpTimer(30);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error sending OTP");
    }
  };

  const handleGoogleAuth = (googleUser) => {
    // here you should receive user info from Google API
    dispatch(setAuthUser(googleUser));
    setShowSuccess(true);
  };

  // ✅ Submit handler with backend integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(""); // clear before new submit
      let userData;

      if (authMethod === "phonenumber") {
        if (!showOtp) {
          await handleSendOtp();
          return;
        } else {
          await verifyOtp({
            phonenumber: formData.phonenumber,
            otp: formData.otp,
          });
          userData = await signup(formData); // signup after OTP verification
        }
      } else if (authMethod === "email") {
        if (isLogin) {
          userData = await login({
            email: formData.email,
            password: formData.password,
          });
        } else {
          if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
          }
          userData = await signup(formData);
        }
      }

      // ✅ Save user into Redux
      if (userData) {
        dispatch(setAuthUser(userData));
      }

      // ✅ Show success modal
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  const toggleForm = () => {
    setIsLogin((s) => !s);
    setShowOtp(false);
    setError("");
    setFormData({
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      city: "",
      state: "",
      otp: "",
    });
  };

  const switchAuthMethod = (method) => {
    setAuthMethod(method);
    setShowOtp(false);
    setError("");
    setFormData((s) => ({
      ...s,
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
      otp: "",
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-x-hidden relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Logo / header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6 shadow-xl">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome Back" : "Join सहGovern"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Sign in to continue making a difference in your community"
                : "Create your account and start reporting civic issues"}
            </p>
          </div>

          {/* Toggle, method selector & form */}
          <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="mt-4" />
          <AuthMethodSelector
            authMethod={authMethod}
            setAuthMethod={switchAuthMethod}
          />

          {authMethod === "google" ? (
            <div className="mt-6">
              <GoogleAuth isLogin={isLogin} onGoogleAuth={handleGoogleAuth} />
            </div>
          ) : (
            <div className="mt-6">
              <AuthForm
                isLogin={isLogin}
                authMethod={authMethod}
                formData={formData}
                onChange={handleInputChange}
                showOtp={showOtp}
                otpTimer={otpTimer}
                handleSendOtp={handleSendOtp}
                handleSubmit={handleSubmit}
                toggleForm={toggleForm}
                error={error}
              />
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-[100] bg-black/50 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl max-w-md mx-4 text-center border border-gray-200 transform animate-bounce">
            <div className="mb-6">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isLogin ? "Welcome Back!" : "Account Created!"}
            </h3>
            <p className="text-gray-600 mb-6">Authentication was successful.</p>
            <button
              onClick={onLoginSuccess} // ✅ tell App to open Home
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;


// // AuthPage.jsx

// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import AuthToggle from "./AuthToggle";
// import AuthMethodSelector from "./AuthMethodSelector";
// import GoogleAuth from "./GoogleAuth";
// import AuthForm from "./AuthForm";
// import { Shield, CheckCircle } from "lucide-react";
// import { sendOtp, verifyOtp, signup, login } from "../../utils/api";

// const AuthPage = ({ onBack, onLoginSuccess }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [authMethod, setAuthMethod] = useState("email"); // 'email' | 'phone' | 'google'
//   const [showOtp, setShowOtp] = useState(false);
//   const [otpTimer, setOtpTimer] = useState(0);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//     phonenumber: "",
//     password: "",
//     confirmPassword: "",
//     fullName: "",
//     city: "",
//     state: "",
//     otp: "",
//   });

//   useEffect(() => {
//     if (otpTimer > 0) {
//       const timer = setTimeout(() => setOtpTimer((t) => t - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [otpTimer]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   // ✅ Send OTP with backend
//   const handleSendOtp = async () => {
//     if (!formData.phonenumber) {
//       setError("Enter phone number first");
//       return;
//     }
//     try {
//       await sendOtp({ phonenumber: formData.phonenumber });
//       setShowOtp(true);
//       setOtpTimer(30);
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Error sending OTP");
//     }
//   };

//   const handleGoogleAuth = () => {
//     setShowSuccess(true);
//   };

//   // ✅ Submit handler with backend integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setError(""); // clear before new submit

//       if (authMethod === "phonenumber") {
//         if (!showOtp) {
//           await handleSendOtp();
//           return;
//         } else {
//           await verifyOtp({
//             phonenumber: formData.phonenumber,
//             otp: formData.otp,
//           });
//           await signup(formData); // signup after OTP verification
//         }
//       } else if (authMethod === "email") {
//         if (isLogin) {
//           await login({ email: formData.email, password: formData.password });
//         } else {
//           if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match");
//             return;
//           }
//           await signup(formData);
//         }
//       }

//       // ✅ Show success modal
//       setShowSuccess(true);
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Authentication failed");
//     }
//   };

//   const toggleForm = () => {
//     setIsLogin((s) => !s);
//     setShowOtp(false);
//     setError("");
//     setFormData({
//       email: "",
//       phonenumber: "",
//       password: "",
//       confirmPassword: "",
//       fullName: "",
//       city: "",
//       state: "",
//       otp: "",
//     });
//   };

//   const switchAuthMethod = (method) => {
//     setAuthMethod(method);
//     setShowOtp(false);
//     setError("");
//     setFormData((s) => ({
//       ...s,
//       email: "",
//       phonenumber: "",
//       password: "",
//       confirmPassword: "",
//       otp: "",
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-x-hidden relative">
//       {/* Navigation */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
//         <div className="w-full max-w-md">
//           {/* Logo / header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-6 shadow-xl">
//               <Shield className="text-white" size={32} />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               {isLogin ? "Welcome Back" : "Join सहGovern"}
//             </h1>
//             <p className="text-gray-600">
//               {isLogin
//                 ? "Sign in to continue making a difference in your community"
//                 : "Create your account and start reporting civic issues"}
//             </p>
//           </div>

//           {/* Toggle, method selector & form */}
//           <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
//           <div className="mt-4" />
//           <AuthMethodSelector
//             authMethod={authMethod}
//             setAuthMethod={switchAuthMethod}
//           />

//           {authMethod === "google" ? (
//             <div className="mt-6">
//               <GoogleAuth isLogin={isLogin} onGoogleAuth={handleGoogleAuth} />
//             </div>
//           ) : (
//             <div className="mt-6">
//               <AuthForm
//                 isLogin={isLogin}
//                 authMethod={authMethod}
//                 formData={formData}
//                 onChange={handleInputChange}
//                 showOtp={showOtp}
//                 otpTimer={otpTimer}
//                 handleSendOtp={handleSendOtp}
//                 handleSubmit={handleSubmit}
//                 toggleForm={toggleForm}
//                 error={error}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Success Message */}
//       {showSuccess && (
//         <div className="fixed inset-0 flex justify-center items-center z-[100] bg-black/50 backdrop-blur-sm">
//           <div className="bg-white/95 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl max-w-md mx-4 text-center border border-gray-200 transform animate-bounce">
//             <div className="mb-6">
//               <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               {isLogin ? "Welcome Back!" : "Account Created!"}
//             </h3>
//             <p className="text-gray-600 mb-6">Authentication was successful.</p>
//             <button
//               onClick={onLoginSuccess} // ✅ tell App to open Home
//               className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthPage;
