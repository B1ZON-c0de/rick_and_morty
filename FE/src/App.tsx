import { Routes, Route } from "react-router-dom"

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={
        <CharactersList />
      }>
        <Route path=":id" element={<CharacterItem />} />
      </Route>
      <Route path="/locations" element={<LocationsList />}>
        <Route path=":id" element={<LocationItem />} />
      </Route>
      <Route path="/episodes" element={<EpisodesList />}>
        <Route path=":id" element={<EpisodeItem />} />
        <Route />
    </Routes>
  </>
};
export default App;
