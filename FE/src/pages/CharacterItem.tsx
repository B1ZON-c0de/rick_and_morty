import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { ICharacter } from "../types";

function CharacterInfo({
  name,
  status,
  species,
  type,
  gender,
  image,
}: ICharacter) {
  return (
    <>
      <p>Имя: {name}</p>
      <p>Статус: {status}</p>
      <p>Род: {species}</p>
      <p>Тип: {type}</p>
      <p>Гендер: {gender}</p>
      <img src={image} />
    </>
  );
}

export function CharacterItem() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<ICharacter>("/characters/" + id);
  return (
    <>{isLoading ? "Загрузка" : error ? error : <CharacterInfo {...data} />}</>
  );
}
