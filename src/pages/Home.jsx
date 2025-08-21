import { useFetchMovies } from "../hooks/fetch"
import Loading from "../components/Loading";
import { POSTER_BASE_URL } from "../config/keys";
import { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Home(){
    const [ page, setPage ] = useState(1);
    const { list, loading, error } = useFetchMovies('now_playing',page);
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
    

    return <section className="p-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 place-items-center">
    {error && <p>{error}</p>}
    { list && list.map((movie)=>{
        return <div key={movie.id}>
            <img src={POSTER_BASE_URL+movie.poster_path} alt="" loading="lazy" />
        </div>
    })} 
    { loading && <div ref={loadingRef} className="mt-50"><Loading /> </div>}
    </section>
}