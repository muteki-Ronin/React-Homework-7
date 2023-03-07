// CORE
import { useContext } from "react";
// CONTEXT
import { ThemeContext } from "../context/ThemeProvider";

export const useThem = () => {
  return useContext(ThemeContext);
};
