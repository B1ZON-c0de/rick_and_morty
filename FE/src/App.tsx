import { Routes, Route, NavLink } from "react-router-dom";
import { ROUTES } from "./route";

const App = () => {
  return (
    <>
      <header className="sticky top-0 py-4 sticky-bg z-99">
        <ul className="flex gap-2 text-xl justify-center">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "base-link")}
              to={ROUTES.home.path}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "base-link")}
              to={ROUTES.characterList.path}
            >
              Персонажи
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "base-link")}
              to={ROUTES.locationList.path}
            >
              Локации
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "base-link")}
              to={ROUTES.episodeList.path}
            >
              Эпизоды
            </NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        {Object.keys(ROUTES).map((key) => (
          <Route path={ROUTES[key].path} element={ROUTES[key].element} />
        ))}
      </Routes>
    </>
  );
};
export default App;
