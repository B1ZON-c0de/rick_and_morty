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
        <ul className="list">
          {data.map((location) => (
            <li key={location.id}>
              <Link
                className="hovered-card text-center text-xl font-bold"
                to={ROUTES.locationList.path + "/" + location.id}
              >
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
