import { useFetchMovies } from "../hooks/fetch"
import Loading from "../components/Loading";
import { useState, useRef, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Popular(){
    const [ page, setPage ] = useState(1);
    const { list, loading, error } = useFetchMovies('popular',page);
    const loadingRef = useRef(0);

    useEffect(()=>{
        if(!loadingRef.current) return;
        const observer = new IntersectionObserver(([ end ])=>{
            if(end.isIntersecting==true){
                setPage(prev=> prev+1)
            }
        },{ threshold : 0.5 })

        observer.observe(loadingRef.current);
    
        return ()=> { observer.disconnect() }
    },[list])
    

    return <div>
    {error && <p>{error}</p>}
    { list &&  <section className=" p-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 place-items-center"><MovieCard list={list} /> </section>}
    { loading && <div ><Loading /> </div>}
    <div ref={loadingRef} ><Loading /> </div>
    </div>
}