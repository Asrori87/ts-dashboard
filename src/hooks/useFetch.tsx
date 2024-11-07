import { useState, useEffect } from "react";
import { fetchData } from "../services/apiService";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: String;
}

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
