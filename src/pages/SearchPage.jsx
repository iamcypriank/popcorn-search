import { useParams } from "react-router-dom"
import Page from "../components/Page";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../config/keys";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";

export default function SearchPage(){
    const { movie } = useParams();  
     
    const [ list, updateList ] = useState([]);
    const [ error, setError ] = useState(null);
    const [loading, setLoading ] = useState(true);
    
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const searchMovies = async ()=>{
            const options = {
                method : 'GET',
                headers :{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${ACCESS_TOKEN}`
                },
                signal
            }

           try{
             const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}`,options);
             if(!response.ok) throw new Error ('not found');
             const data = await response.json();
             updateList(data.results);
           }catch(err){
            if(err.name!='AbortError'){
                setError(err.message);
            }
           }finally{
            setLoading(false);
           }
        }

        searchMovies();

        return ()=> controller.abort();
    })

    return <>
        { loading && <Loading />}
        { error && <p>{error}</p> }
        { list && <section className="p-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 place-items-center"><MovieCard list={list} /></section> }
    </>
}