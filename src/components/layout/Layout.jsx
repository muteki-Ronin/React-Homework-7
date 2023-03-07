// CORE
import { Outlet } from "react-router-dom";
// COMPONENTS
import { Header } from "../../components/header/Header";
// CUSTOM-HOOKS
import { useThem } from "../../hook/useThem";
// STYLE
import "./style.css";

export const Layout = () => {
  const { themType } = useThem();
  return (
    <div className={themType ? "layout dark" : "layout light"}>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
