// CORE
import { Navigate } from "react-router-dom";
import { routers } from "../core/config";
// CUSTOM-HOOKS
import { useAuth } from "../hook/useAuth";

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routers.login} />;
  }

  return children;
};
