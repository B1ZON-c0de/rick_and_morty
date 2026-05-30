import { useEffect, useState } from "react";

export const useFetch = async <T>(url: string) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/api" + url);
      if (!res.ok) {
        return null;
      }
      const json = await res.json();
      setData(json);
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
