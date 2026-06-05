import type { IListChildrenProps, ILocation } from "../types";
import { ROUTES } from "../route";
import { Link } from "react-router-dom";
import { BaseList } from "../components/BaseList";

function RenderLocations({ data, getLastNode }: IListChildrenProps<ILocation>) {
  return (
    <li ref={getLastNode}>
      <Link
        className="hovered-card text-center text-xl font-bold"
        to={ROUTES.locationList.path + "/" + data.id}
      >
        {data.name}
      </Link>
    </li>
  );
}

export function LocationsList() {
  return <BaseList ListItem={RenderLocations} url={ROUTES.locationList.path} />;
}
