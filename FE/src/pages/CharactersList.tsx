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
        <ul className="grid grid-cols-3 max-w-7xl mx-auto mt-6 gap-3">
          {data.map((character) => (
            <li key={character.id}>
              <Link to={ROUTES.characterList.path + "/" + character.id}>
                <div className=" flex flex-col gap-6 rounded-md bg-gray-50 border-2 border-transparent hover:border-green-600 transition-all duration-300 p-4">
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
