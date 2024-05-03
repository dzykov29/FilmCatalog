import { useState, useEffect } from "react";
import axios from "axios";
import { Anime } from "../utils/Types";

interface Error {
  message: string; // Assuming the error object has a 'message' property
  // You can add more properties if your error object has additional information
}

// Assuming useFetchData returns data, loading, and error
export interface FetchFilmResult<T> {
  data: T | null;
  isLoading: boolean;
  isError?: Error | null;
}

export function useFetchFilmData(id: number): FetchFilmResult<Anime> {
    const [data, setData] = useState<Anime | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://shikimori.one/api/animes/${id}`);
                setData(res.data);
            } catch (error: any) {
                setIsError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { data, isLoading, isError };
}
