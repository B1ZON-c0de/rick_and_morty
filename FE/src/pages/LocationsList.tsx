import { useFetch } from "../hooks/useFetch";
import type { ILocation } from "../types";
import { ROUTES } from "../route";
import { Link } from "react-router-dom";

export function LocationsList() {
  const { isLoading, data, error } = useFetch<ILocation[]>("/locations");
  return (
    <>
      {isLoading ? (
        "Загрузка"
      ) : error ? (
        error
      ) : (
        <ul>
          {data.map((location) => (
            <li key={location.id}>
              <Link to={ROUTES.locationList.path + "/" + location.id}>
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
