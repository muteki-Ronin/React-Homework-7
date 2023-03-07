// CORE
import { NavLink } from "react-router-dom";
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
        <NavLink
          to={routers.home}
          className={
            themType
              ? "header-link header-link_dark"
              : "header-link header-link_light"
          }
        >
          {languageData.homePage}
        </NavLink>
        <NavLink
          to={routers.login}
          className={
            themType
              ? "header-link header-link_dark"
              : "header-link header-link_light"
          }
        >
          {languageData.loginPage}
        </NavLink>
        <NavLink
          to={routers.starapp}
          className={
            themType
              ? "header-link header-link_dark"
              : "header-link header-link_light"
          }
        >
          {languageData.starAppPage}
        </NavLink>
        <NavLink
          to={routers.help}
          className={
            themType
              ? "header-link header-link_dark"
              : "header-link header-link_light"
          }
        >
          {languageData.helpPage}
        </NavLink>
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
