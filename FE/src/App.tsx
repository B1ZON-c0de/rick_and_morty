import { Routes, Route, NavLink } from "react-router-dom";
import { ROUTES } from "./route";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={ROUTES.home.path}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.characterList.path}>Персонажи</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.locationList.path}>Локации</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.episodeList.path}>Эпизоды</NavLink>
        </li>
      </ul>
      <h1>HELLO RICK and MORTY</h1>
      <Routes>
        {Object.keys(ROUTES).map((key) => (
          <Route path={ROUTES[key].path} element={ROUTES[key].element} />
        ))}
      </Routes>
    </>
  );
};
export default App;
