// CORE
import { useContext } from "react";
// CONTEXT
import { LanguageContext } from "../context/LanguageProvider";

export const useLang = () => {
  return useContext(LanguageContext);
};
