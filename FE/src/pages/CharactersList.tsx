import { Link } from "react-router-dom";
import type { ICharacter } from "../types";
import { ROUTES } from "../route";
import { useCallback, useRef, useState } from "react";
import { useFetchList } from "../hooks/useFetchList";

export function CharactersList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, error, hasMore } = useFetchList<ICharacter>(
    "/character",
    pageNumber,
  );

  const observer = useRef<IntersectionObserver | null>(null);

  const getLastNode = useCallback(
    (node: Element) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          console.log("page++");
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore],
  );
  return (
    <>
      {
        <ul className="list">
          {data.map((character, idx) => {
            if (data.length === idx + 1) {
              return (
                <li ref={getLastNode} key={character.id}>
                  <Link to={ROUTES.characterList.path + "/" + character.id}>
                    <div className=" hovered-card">
                      <img
                        className="w-full object-cover"
                        src={character.image}
                      />
                      <h2 className="text-xl font-bold text-center">
                        {character.name}
                      </h2>
                    </div>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={character.id}>
                  <Link to={ROUTES.characterList.path + "/" + character.id}>
                    <div className=" hovered-card">
                      <img
                        className="w-full object-cover"
                        src={character.image}
                      />
                      <h2 className="text-xl font-bold text-center">
                        {character.name}
                      </h2>
                    </div>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      }
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
    </>
  );
}
