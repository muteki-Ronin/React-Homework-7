// CORE
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// COMPONENTS
import { ListItems } from "../../components/listItems/ListItems";
import { Loader } from "../../components/loader/Loader";
// CONTEXT
import { LanguageContext } from "../../context/LanguageProvider";
import { AuthContext } from "../../context/AuthProvider";
// STYLE
import "./style.css";

export const StarAppPage = ({ state, handleClick }) => {
  const { languageData } = useContext(LanguageContext);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const logOut = () => {
    signOut(() => navigate("/", { replace: true }));
  };

  return (
    <div className="star-container">
      <div className="btn-panel">
        <button
          className={state.itemType === "people" ? "btn-active" : "btn"}
          onClick={() => handleClick("people")}
        >
          {languageData.peopleBtn}
        </button>

        <button
          className={state.itemType === "planets" ? "btn-active" : "btn"}
          onClick={() => handleClick("planets")}
        >
          {languageData.planetsBtn}
        </button>

        <button
          className={state.itemType === "starships" ? "btn-active" : "btn"}
          onClick={() => handleClick("starships")}
        >
          {languageData.starShipsBtn}
        </button>
      </div>
      <button onClick={logOut}>{languageData.logOutBtn}</button>
      {state.isLoading ? (
        <Loader />
      ) : (
        <ListItems items={state.items} type={state.itemType} />
      )}
      <button onClick={goBack}>{languageData.previousPageBtn}</button>
    </div>
  );
};
