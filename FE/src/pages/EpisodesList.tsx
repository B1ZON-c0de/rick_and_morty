import type { IEpisode, IListChildrenProps } from "../types";
import { ROUTES } from "../route";
import { Link } from "react-router-dom";
import { BaseList } from "../components/BaseList";

function RenderEpisodes({ data, getLastNode }: IListChildrenProps<IEpisode>) {
  return (
    <li ref={getLastNode}>
      <Link
        className="hovered-card text-center text-xl font-bold"
        to={ROUTES.episodeList.path + "/" + data.id}
      >
        {data.name}
      </Link>
    </li>
  );
}

export function EpisodesList() {
  return <BaseList ListItem={RenderEpisodes} url={ROUTES.episodeList.path} />;
}
