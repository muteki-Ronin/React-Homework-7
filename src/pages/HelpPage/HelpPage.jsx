// CORE
import { useNavigate } from "react-router-dom";
// CUSTOM-HOOKS
import { useLang } from "../../hook/useLang";
// STYLE
import "./style.css";

export const HelpPage = () => {
  const { languageData } = useLang();
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
