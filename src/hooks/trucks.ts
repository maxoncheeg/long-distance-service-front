import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ITruck } from "../models";

export function useTrucks() {
    const [trucks, setTrucks] = useState<ITruck[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    async function fetchTrucks() {
        setLoading(true)
        try {
            const response = await axios.get<ITruck[]>('http://localhost/api/test/trucks')
            console.log(response.data)
            setTrucks(response.data)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTrucks()
    }, [])

    return { trucks, error, loading }
}