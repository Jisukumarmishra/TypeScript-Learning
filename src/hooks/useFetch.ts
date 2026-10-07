import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;

}


export function useFetch<T>(url:string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  })

  // useEffect to make fetch request

  useEffect(() => {
  const fetchData = async () => {
    try {
      setState({
        data: null,
        loading: true,
        error: null
      });

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data: T = await response.json();

      setState({
        data,
        loading: false,
        error: null
      });

    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Something went wrong"
      });
    }
  };

  fetchData();
}, [url]);




  return state

}