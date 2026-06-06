import { useParams } from "react-router-dom";
import type { IEpisode } from "../types";
import { BaseName } from "../components/BaseName";
import { useFetchItem } from "../hooks/useFetchItem";
import { ROUTES } from "../route";
import { BaseLoader } from "../components/BaseLoader";

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
  const { data, isLoading, error } = useFetchItem<IEpisode>(
    ROUTES.episodeList.path + "/" + id,
  );
  return (
    <>
      {isLoading ? <BaseLoader /> : error ? error : <EpisodeInfo {...data} />}
    </>
  );
}
