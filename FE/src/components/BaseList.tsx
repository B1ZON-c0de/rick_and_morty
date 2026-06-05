import { useFetchList } from "../hooks/useFetchList";
import { useState, useRef, useCallback, type ComponentType } from "react";
import type {
  ICharacter,
  IEpisode,
  IListChildrenProps,
  ILocation,
} from "../types";

interface Props {
  ListItem: ComponentType<IListChildrenProps>;
  url: string;
}

export function BaseList<T extends ILocation | ICharacter | IEpisode>({
  ListItem,
  url,
}: Props) {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, error, hasMore } = useFetchList<T>(url, pageNumber);

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
      <ul className="list">
        {data.map((item, idx) => {
          if (data.length === idx + 1) {
            return <ListItem data={item} getLastNode={getLastNode} />;
          } else {
            return <ListItem data={item} />;
          }
        })}
      </ul>
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
    </>
  );
}
