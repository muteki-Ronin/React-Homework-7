// CORE
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { routers } from "../core/config";
// CONTEXT
import { AuthContext } from "../context/AuthProvider";

export const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={routers.login} />;
  }

  return children;
};
