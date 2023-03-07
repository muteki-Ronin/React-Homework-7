// CORE
import { Link } from "react-router-dom";
import { routers } from "../../core/config";
// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
import { useLang } from "../../hook/useLang";
// STYLES
import "./style.css";

export const Header = () => {
  const { themType, setThemType } = useThem();
  const { languageData, getLanguageData } = useLang();

  const toggleThem = () => {
    setThemType(!themType);
  };

  const toggleLanguage = () => {
    languageData.type === "eng"
      ? getLanguageData("ru")
      : getLanguageData("eng");
  };

  return (
    <header
      className={
        themType
          ? "header-container header-container_dark"
          : "header-container header-container_light"
      }
    >
      <div className="nav-btn_panel">
        <button>
          <Link to={routers.home}>{languageData.homePage}</Link>
        </button>
        <button>
          <Link to={routers.login}>{languageData.loginPage}</Link>
        </button>
        <button>
          <Link to={routers.starapp}>{languageData.starAppPage}</Link>
        </button>
        <button>
          <Link to={routers.help}>{languageData.helpPage}</Link>
        </button>
      </div>

      <h1
        className={
          themType
            ? "header-title header-title_dark"
            : "header-title header-title_light"
        }
      >
        {languageData.header}
      </h1>

      <div className="header-btn_panel">
        <button
          onClick={toggleThem}
          className={
            themType ? "them-btn them-btn_dark" : "them-btn them-btn_light"
          }
        >
          {themType ? languageData.themeBtnDark : languageData.themeBtnLight}
        </button>
        <button
          className={
            themType ? "them-btn them-btn_dark" : "them-btn them-btn_light"
          }
          onClick={toggleLanguage}
        >
          {languageData.languageBtn}
        </button>
      </div>
    </header>
  );
};
