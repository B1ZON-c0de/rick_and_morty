import { useParams } from "react-router-dom";
import type { ICharacter } from "../types";
import { BaseName } from "../components/BaseName";
import { useFetchItem } from "../hooks/useFetchItem";

function CharacterInfo({
  name,
  status,
  species,
  type,
  gender,
  image,
}: ICharacter) {
  return (
    <div className="flex gap-6 m-6">
      <div className="w-1/2 card">
        <img className="object-cover h-full w-full" src={image} />
      </div>
      <div className="w-1/2 card flex flex-col gap-4">
        <BaseName label="Имя" text={name} />
        <BaseName
          label="Статус"
          text={
            status === "Alive"
              ? "Жив"
              : status === "Dead"
                ? "Мёртв"
                : "Неизвестно"
          }
        />
        <BaseName label="Вид" text={species} />
        {type && <BaseName label="Тип" text={type} />}
        <BaseName label="Пол" text={gender} />
      </div>
    </div>
  );
}

export function CharacterItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchItem<ICharacter>(
    "/character/" + id,
  );
  return (
    <>{isLoading ? "Загрузка" : error ? error : <CharacterInfo {...data} />}</>
  );
}
