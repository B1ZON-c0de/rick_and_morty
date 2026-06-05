import { Routes, Route, NavLink } from "react-router-dom";
import { ROUTES } from "./route";

const App = () => {
  return (
    <>
      <header className="sticky top-0 py-4 sticky-bg z-99">
        <ul className="flex gap-2 text-xl justify-center">
          {Object.keys(ROUTES).map((key) => {
            if ("name" in ROUTES[key]) {
              return (
                <li key={ROUTES[key].name}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "base-link"
                    }
                    to={ROUTES[key].path}
                  >
                    {ROUTES[key].name}
                  </NavLink>
                </li>
              );
            }
          })}
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
