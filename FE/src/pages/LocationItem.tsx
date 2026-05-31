import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { ILocation } from "../types";

function LocationInfo({ name, type, dimension }: ILocation) {
  return (
    <>
      <p>Имя {name}</p>
      <p>Тип {type}</p>
      <p>Измерение {dimension}</p>
    </>
  );
}

export function LocationItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<ILocation>("/locations/" + id);
  return (
    <>{isLoading ? "Загрузка" : error ? error : <LocationInfo {...data} />}</>
  );
}
