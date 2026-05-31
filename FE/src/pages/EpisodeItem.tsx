import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { IEpisode } from "../types";

function EpisodeInfo({ name, air_date, episode }: IEpisode) {
  return (
    <>
      <p>Имя {name}</p>
      <p>Дата выхода {air_date}</p>
      <p>Эпизод {episode}</p>
    </>
  );
}

export function EpisodeItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<IEpisode>("/episodes/" + id);
  return (
    <>{isLoading ? "Загрузка" : error ? error : <EpisodeInfo {...data} />}</>
  );
}
