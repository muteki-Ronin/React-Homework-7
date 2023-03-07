// CORE
import { useNavigate } from "react-router-dom";
import { routers } from "../../core/config";
// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
import { useLang } from "../../hook/useLang";
import { useAuth } from "../../hook/useAuth";
//STYLE
import "./style.css";

export const LoginPage = () => {
  const { themType } = useThem();
  const { languageData } = useLang();
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    signIn(userName, () => navigate(routers.starapp));
  };

  const logOut = () => {
    signOut(() => navigate(routers.home));
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={
        themType
          ? "login-container login-container_dark"
          : "login-container login-container_light"
      }
    >
      <h3 className="loginpage-title">Login page</h3>
      {user ? (
        <button onClick={logOut}>{languageData.logOutBtn}</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Your name" />
          <button>{languageData.logInBtn}</button>
        </form>
      )}

      <button onClick={goBack}>{languageData.previousPageBtn}</button>
    </div>
  );
};
