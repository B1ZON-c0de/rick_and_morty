import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./route";

const App = () => {
  return (
    <>
      <Routes>
        {Object.keys(ROUTES).map((key) => (
          <Route path={ROUTES[key].path} element={ROUTES[key].path} />
        ))}
      </Routes>
    </>
  );
};
export default App;
