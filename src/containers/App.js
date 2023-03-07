// CORE
import { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "../core/config";
import { RequireAuth } from "../hoc/RequireAuth";
// COMPONENTS
import { Layout } from "../components/layout/Layout";
import { ErrorBoundary } from "../components/errorBoundary/ErrorBoundary";
// PAGES
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { StarAppPage } from "../pages/StarAppPage/StarAppPage";
import { HelpPage } from "../pages/HelpPage/HelpPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const App = () => {
  const [state, setState] = useState({
    items: [],
    itemType: "people",
    isLoading: true,
  });

  const requestItems = (type) => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((response) => response.json())
      .then((data) =>
        setState({ items: data.results, itemType: type, isLoading: false })
      )
      .catch((error) => {
        console.error(error);
        setState({ ...state, isLoading: false });
      });
  };

  const handleClick = (type) => {
    setState({ ...state, isLoading: true });
    requestItems(type);
  };

  useEffect(() => {
    requestItems("people");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path={routers.home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routers.login} element={<LoginPage />} />
            <Route
              path={routers.starapp}
              element={
                <RequireAuth>
                  <StarAppPage state={state} handleClick={handleClick} />
                </RequireAuth>
              }
            />
            <Route path={routers.help} element={<HelpPage />} />
            <Route path={routers.notfound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
