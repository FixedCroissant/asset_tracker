import { useAuth } from "../utils/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const Auth = useAuth();

  //If not logged in.
  if (!Auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  //if logged in, show corresponding children.
  return children;
};

export default RequireAuth;
