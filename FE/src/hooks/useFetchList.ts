import axios, { AxiosError, type Canceler } from "axios";
import { useEffect, useState } from "react";

interface IResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface IResponse<T> {
  info: IResponseInfo;
  results: T[];
}

export const useFetchList = <T>(url: string, pageNumber?: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<T[]>([]);

  let cancel: Canceler;

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.get<IResponse<T>>(
        "https://rickandmortyapi.com/api/" + url,
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
          params: { page: pageNumber },
        },
      );
      setHasMore(res.data.info.next !== null);
      setData((prev) => [...prev, ...res.data.results]);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      cancel();
    };
  }, [url, pageNumber]);

  return { data, isLoading, error, hasMore };
};
