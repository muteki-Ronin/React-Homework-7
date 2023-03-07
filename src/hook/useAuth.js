// CORE
import { useContext } from "react";
// CONTEXT
import { AuthContext } from "../context/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
