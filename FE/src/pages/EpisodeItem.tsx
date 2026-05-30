import { useLocation } from "react-router-dom";

export function EpisodeItem() {
  const { state } = useLocation();

  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.air_date}</p>
      <p>{state.episode}</p>
    </div>
  );
}
