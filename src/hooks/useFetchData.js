import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://shikimori.one/api/animes/', {
                params: {
                    limit: 5
                }
            });
            setData(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз при монтировании

    return { data, loading, error };
}

