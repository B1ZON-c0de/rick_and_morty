import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { IEpisode } from "../types";
import { BaseName } from "../BaseName";

function EpisodeInfo({ name, air_date, episode }: IEpisode) {
  return (
    <div className="card m-6 flex flex-col gap-4">
      <BaseName label="Имя" text={name} />
      <BaseName label="Дата выхода" text={air_date} />
      <BaseName label="Эпизод" text={episode} />
    </div>
  );
}

export function EpisodeItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<IEpisode>("/episodes/" + id);
  return (
    <>{isLoading ? "Загрузка" : error ? error : <EpisodeInfo {...data} />}</>
  );
}
