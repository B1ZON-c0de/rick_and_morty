import { useFetchList } from "../hooks/useFetchList";
import { useState, useRef, useCallback, type ComponentType } from "react";
import type {
  ICharacter,
  IEpisode,
  IListChildrenProps,
  ILocation,
} from "../types";

interface Props<T> {
  ListItem: ComponentType<IListChildrenProps<T>>;
  url: string;
}

export function BaseList<T extends ILocation | ICharacter | IEpisode>({
  ListItem,
  url,
}: Props<T>) {
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
            return (
              <ListItem key={item.id} data={item} getLastNode={getLastNode} />
            );
          } else {
            return <ListItem key={item.id} data={item} />;
          }
        })}
      </ul>
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
    </>
  );
}
