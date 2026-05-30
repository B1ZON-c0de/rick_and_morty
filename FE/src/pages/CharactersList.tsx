import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { ICharacter } from "../types";
import { ROUTES } from "../route";

export function CharactersList() {
  const { isLoading, data, error } = useFetch<ICharacter[]>("/characters");

  return (
    <>
      {isLoading ? (
        "Загрузка"
      ) : error ? (
        error
      ) : (
        <ul>
          {data.map((character) => (
            <li key={character.id}>
              <Link to={ROUTES.characterList + "/" + character.id}>
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
