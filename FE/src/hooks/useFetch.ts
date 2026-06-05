import axios from "axios";
import { useEffect, useState } from "react";

interface IResponseInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

interface IResponse<T> {
  info: IResponseInfo;
  results: T;
}

export const useFetch = <T extends object>(url: string) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setError("");
    setIsLoading(true);
    try {
      const res = await axios.get<IResponse<T> | T>(
        "https://rickandmortyapi.com/api/" + url,
      );
      if ("results" in res.data) {
        setData(res.data.results);
      } else {
        setData(res.data);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
};
