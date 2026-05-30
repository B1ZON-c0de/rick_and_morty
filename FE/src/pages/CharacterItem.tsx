import { useLocation } from "react-router-dom";

export function CharacterItem() {
  const { state } = useLocation();
  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.status}</p>
      <p>{state.species}</p>
      <p>{state.type}</p>
      <p>{state.gender}</p>
      <img src={state.image} />
    </div>
  );
}
