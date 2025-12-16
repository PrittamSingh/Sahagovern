import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./Layout/dashboardlayout";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issue";
import Citizens from "./pages/Citizens";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Setting";
import UsersManagment from "./pages/UsersManagment";
import CivicIssueAssignment from "./pages/department";
import AuthComponent from "./pages/auth";
import PrivateRoute from "./pages/PrivateRoute";

export default function App() {
  const isLoggedIn = !!localStorage.getItem("token"); // simple auth check

  return (
    <Routes>
      {/* Root route - redirect based on auth status */}
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/authpage" replace />
          )
        }
      />

      {/* Auth page - redirect to dashboard if already logged in */}
      <Route
        path="/authpage"
        element={
          isLoggedIn ? <Navigate to="/dashboard" replace /> : <AuthComponent />
        }
      />

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/citizens" element={<Citizens />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<UsersManagment />} />
          <Route path="/department" element={<CivicIssueAssignment />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Catch all route - redirect unauthenticated users to auth page */}
      <Route
        path="*"
        element={
          <Navigate to={isLoggedIn ? "/dashboard" : "/authpage"} replace />
        }
      />
    </Routes>
  );
}
