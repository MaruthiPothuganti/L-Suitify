import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const RequireAuth = ({ children }) => {
  let location = useLocation();
  const { userAuthState } = useAuth();
  const { isAuthenticated } = userAuthState;
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};
