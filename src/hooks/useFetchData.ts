import { useState, useEffect } from "react";
import axios from "axios";
import { Anime } from "../utils/Types";

interface Error {
  messages: string; // Assuming the error object has a 'message' property
}

// Assuming useFetchData returns data, loading, and error
interface FetchResult<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

export default function useFetchData(): FetchResult<Anime[]> {
    const [data, setData] = useState<Anime[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            const res = await axios.get<Anime[]>('https://shikimori.one/api/animes/', {
                params: {
                    limit: 5
                }
            });
            setData(res.data);
        } catch (error: any) {
            setError(error.messages);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз при монтировании

    return { data, loading, error };
}

