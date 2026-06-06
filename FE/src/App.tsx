import { Routes, Route, NavLink } from "react-router-dom";
import { ROUTES } from "./route";
import { lazy, Suspense } from "react";
import "@mantine/core/styles.css";
import { BaseLoader } from "./components/BaseLoader";

const App = () => {
  const NotFound = lazy(() =>
    import("./pages/NotFound").then((module) => ({
      default: module.NotFound,
    })),
  );
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
      <Suspense fallback={<BaseLoader />}>
        <Routes>
          {Object.keys(ROUTES).map((key) => {
            const Component = ROUTES[key].element;
            return (
              <Route
                key={ROUTES[key].path}
                path={ROUTES[key].path}
                element={<Component />}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
