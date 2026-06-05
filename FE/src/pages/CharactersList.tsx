import { Link } from "react-router-dom";
import type { ICharacter, IListChildrenProps } from "../types";
import { ROUTES } from "../route";
import { BaseList } from "../components/BaseList";

function RenderCharacters({
  data,
  getLastNode,
}: IListChildrenProps<ICharacter>) {
  return (
    <li ref={getLastNode} key={data.id}>
      <Link to={ROUTES.characterList.path + "/" + data.id}>
        <div className=" hovered-card">
          <img className="w-full object-cover" src={data.image} />
          <h2 className="text-xl font-bold text-center">{data.name}</h2>
        </div>
      </Link>
    </li>
  );
}

export function CharactersList() {
  return (
    <BaseList ListItem={RenderCharacters} url={ROUTES.characterList.path} />
  );
}
