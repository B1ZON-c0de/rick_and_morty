import { useFetch } from "../hooks/useFetch";
import type { IEpisode } from "../types";
import { ROUTES } from "../route";
import { Link } from "react-router-dom";

export function EpisodesList() {
  const { data, isLoading, error } = useFetch<IEpisode[]>("/episodes");
  return (
    <>
      {isLoading ? (
        "Загрузка"
      ) : error ? (
        error
      ) : (
        <ul>
          {data.map((episode) => (
            <li key={episode.id}>
              <Link
                to={ROUTES.episodeList.path + "/" + episode.id}
                state={episode}
              >
                {episode.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
