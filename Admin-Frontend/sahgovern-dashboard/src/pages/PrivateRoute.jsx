import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return isLoggedIn ? <Outlet /> : <Navigate to="/authpage" replace />;
};

export default PrivateRoute;
