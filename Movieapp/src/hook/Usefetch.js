import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjNjMjkyMTFlNmJjZGRiMzYyN2M0M2ExMDNjMThjOSIsInN1YiI6IjY1MDYwZGI4NDJkOGE1MDBmZTNhODU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FqEz-6zQkkGRHskA0svB-MQtTqYlREp639qkH7RM0-k"
        }
    };

    const url = `https://api.themoviedb.org/3/movie/${endpoint}`


    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true)
                const response = await axios.request(url, options)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        getMovies();
    }, [])


    return { data, isLoading, error }
}

export default useFetch;

export const useID = (ID) => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjNjMjkyMTFlNmJjZGRiMzYyN2M0M2ExMDNjMThjOSIsInN1YiI6IjY1MDYwZGI4NDJkOGE1MDBmZTNhODU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FqEz-6zQkkGRHskA0svB-MQtTqYlREp639qkH7RM0-k"
        }
    };

    const url = `https://api.themoviedb.org/3/movie/${ID}`


    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true)
                const response = await axios.request(url, options)
                setData(response.data)
                console.log(response);
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        getMovies();
    }, [])


    return { data, isLoading, error }
}

// export default useID;