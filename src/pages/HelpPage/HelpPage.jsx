// CORE
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// CONTEXT
import { LanguageContext } from "../../context/LanguageProvider";
// STYLE
import "./style.css";

export const HelpPage = () => {
  const { languageData } = useContext(LanguageContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="helppage-container">
      <h3 className="helppage-title">HelpPage!!!!!</h3>
      <button onClick={goBack}>{languageData.previousPageBtn}</button>
    </div>
  );
};
