// CORE
import { useContext } from "react";
import { Link } from "react-router-dom";
import { routers } from "../../core/config";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";
import { LanguageContext } from "../../context/LanguageProvider";
// STYLE
import "./style.css";

export const HomePage = () => {
  const { themType } = useContext(ThemeContext);
  const { languageData } = useContext(LanguageContext);

  return (
    <div
      className={
        themType
          ? "homepage-container homepage-container_dark"
          : "homepage-container homepage-container_light"
      }
    >
      All the Star Wars data you've ever wanted: People, Planets, Spaceships...
      <Link to={routers.login}>{languageData.logInBtn}</Link>
    </div>
  );
};
