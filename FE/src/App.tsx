import { Routes, Route } from "react-router-dom";
import {
  CharacterItem,
  CharactersList,
  LocationItem,
  LocationsList,
  EpisodeItem,
  EpisodesList,
  Home,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharacterItem />} />
        <Route path="/locations" element={<LocationsList />} />
        <Route path="/locations/:id" element={<LocationItem />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/episodes/:id" element={<EpisodeItem />} />
      </Routes>
    </>
  );
};
export default App;
