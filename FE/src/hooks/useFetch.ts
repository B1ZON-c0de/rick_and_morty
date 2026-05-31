import { useEffect, useState } from "react";

interface IError {
  error: string;
}

export const useFetch = <T>(url: string) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api" + url);
      const json = await res.json();
      const resError: IError["error"] | undefined = json?.error;
      if (resError) {
        setError(resError);
        return;
      }
      setData(json.data);
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
