import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchFilmData(id) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://shikimori.one/api/animes/${id}`);
                setData(res.data);
            } catch (error) {
                setIsError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { data, isLoading, isError };
}
