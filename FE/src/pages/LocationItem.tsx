import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { ILocation } from "../types";
import { BaseName } from "../BaseName";

function LocationInfo({ name, type, dimension }: ILocation) {
  return (
    <div className="card m-6 flex flex-col w-full gap-4">
      <BaseName label="Имя" text={name} />
      <BaseName label="Тип" text={type} />
      <BaseName label="Измерение" text={dimension} />
    </div>
  );
}

export function LocationItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<ILocation>("/location/" + id);
  return (
    <>{isLoading ? "Загрузка" : error ? error : <LocationInfo {...data} />}</>
  );
}
