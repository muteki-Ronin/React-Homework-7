// CORE
import { useContext } from "react";
import { Link } from "react-router-dom";
import { routers } from "../../core/config";
// CONTEXT
import { LanguageContext } from "../../context/LanguageProvider";
// STYLES
import "./style.css";
import boyan from "../../img/accordion.png";

export const NotFoundPage = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="notfound-container">
      <img src={boyan} alt="404" />
      <h2 className="notfound-title">404</h2>
      <Link to={routers.home}>{languageData.homePage}</Link>
    </div>
  );
};
