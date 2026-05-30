import { useLocation } from "react-router-dom";

export function LocationItem() {
  const { state } = useLocation();

  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.type}</p>
      <p>{state.dimension}</p>
    </div>
  );
}
