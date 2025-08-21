import { useEffect, useState } from "react"
import { ACCESS_TOKEN } from "../config/keys";



export const useFetchMovies= (path='top_rated',page=1)=>{
    const [ list , updateList ] = useState([]);
    const [ loading , setLoading ] = useState(true);
    const [ error , setError ] = useState(null);
    const fetchMovies = async(signal)=>{
        const options = {
            method : 'GET',
            headers :{
                'Content-Type' : 'Application/json',
               'Authorization' :`Bearer ${ACCESS_TOKEN}`
            },
            signal
        }
        try{
             const response = await fetch(`https://api.themoviedb.org/3/movie/${path}?page=${page}`,options);
             const data = await response.json();
             if(!data.results) throw new Error('resource not found');
             updateList(prev => {
                const filteredList = data.results.filter(
                    current => !prev.some(movie => current.id==movie.id )
                )
                
                return [...prev,...filteredList];
             })

        }catch(err){
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        fetchMovies(signal);

        return ()=> controller.abort();
    },[path,page])
    return {
        list,
        loading,
        error
    }
}