// CORE
import { useContext } from "react";
import { Outlet } from "react-router-dom";
// COMPONENTS
import { Header } from "../../components/header/Header";
// CONTEXT
import { ThemeContext } from "../../context/ThemeProvider";
// STYLE
import "./style.css";

export const Layout = () => {
  const { themType } = useContext(ThemeContext);
  return (
    <div className={themType ? "layout dark" : "layout light"}>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
