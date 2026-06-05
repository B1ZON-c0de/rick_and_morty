import { useEffect, useState } from "react";
import type { ICharacter, IEpisode, ILocation } from "../types";
import axios, { AxiosError } from "axios";

export const useFetchItem = <T extends ICharacter | IEpisode | ILocation>(
  url: string,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<T | null>(null);

  const fetchData = async () => {
    setError("");
    setIsLoading(true);
    try {
      const res = await axios.get<T>("https://rickandmortyapi.com/api/" + url);
      setData(res.data);
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
  }, [url]);

  return { isLoading, error, data };
};
