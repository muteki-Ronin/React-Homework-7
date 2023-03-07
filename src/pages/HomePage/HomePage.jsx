// CORE
import { Link } from "react-router-dom";
import { routers } from "../../core/config";
// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
import { useLang } from "../../hook/useLang";
// STYLE
import "./style.css";

export const HomePage = () => {
  const { themType } = useThem();
  const { languageData } = useLang();

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
