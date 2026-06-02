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
        <ul className="list">
          {data.map((character) => (
            <li key={character.id}>
              <Link to={ROUTES.characterList.path + "/" + character.id}>
                <div className=" hovered-card">
                  <img className="w-full object-cover" src={character.image} />
                  <h2 className="text-xl font-bold text-center">
                    {character.name}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
