// // Layout.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import AuthAccess from "./Components/AuthCredentials/AuthAccess";
// import AuthPage from "./Components/AuthCredentials/AuthPage";
// import Home from "./Pages/Home/Home";
// import Feed from "./Components/Feed/Feed";
// import NewPostForm from "./Components/AddPost/NewPostForm";
// // import DashboardLayout from "./Components/UI/DashboardLayout"; // ✅ new

// const Layout = () => {
//   const authUser = useSelector((state) => state.auth.user);

//   return (
//     <Routes>
//       {/* Landing */}
//       <Route path="/" element={<AuthAccess />} />

//       {/* Auth */}
//       <Route path="/auth" element={<AuthPage />} />

//       {/* Protected Routes under Dashboard */}
//       <Route
//         path="/"
//         element={authUser ? <DashboardLayout /> : <Navigate to="/auth" />}
//       >
//         <Route path="home" element={<Home />} />
//         <Route path="feed" element={<Feed />} />
//         <Route path="new-post" element={<NewPostForm />} />
//       </Route>

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default Layout;


// // // Layout.jsx
// // import React from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import { useSelector } from "react-redux";

// // import Home from "./Pages/Home/Home";
// // import AuthPage from "./Components/AuthCredentials/AuthPage";
// // import AuthAccess from "./Components/AuthCredentials/AuthAccess";
// // import NewPostForm from "./Components/AddPost/NewPostForm";
// // import Feed from "./Components/Feed/Feed";

// // const Layout = () => {
// //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

// //   return (
// //     <Routes>
// //       {/* Landing */}
// //       <Route path="/" element={<AuthAccess />} />

// //       {/* Auth Page */}
// //       <Route path="/auth" element={<AuthPage />} />

// //       {/* Protected Routes */}
// //       <Route
// //         path="/home"
// //         element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}
// //       />
// //       <Route
// //         path="/feed"
// //         element={isAuthenticated ? <Feed /> : <Navigate to="/auth" />}
// //       />
// //       <Route
// //         path="/new-post"
// //         element={isAuthenticated ? <NewPostForm /> : <Navigate to="/auth" />}
// //       />

// //       {/* Catch-all */}
// //       <Route path="*" element={<Navigate to="/" />} />
// //     </Routes>
// //   );
// // };

// // export default Layout;
