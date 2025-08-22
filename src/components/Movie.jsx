import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { ACCESS_TOKEN } from "../config/keys";
import { useReducer } from "react";
import  Loading from "./Loading";
import { POSTER_BASE_URL } from "../config/keys";
import Genre from "./Genre";
import { motion } from "motion/react";



const movieReducer = (state,action)=>{
    switch(action.type){
        case 'loading' : {
            return { ...state, loading : false }
        }
        case 'error' : {
            return { ...state, error : action.error }
        }
        case 'movie' : {
            return { ...state,movie : action.movie }
        }

    }
}


export default function Movie(){
   const { movieid } = useParams();
   const [ state, dispatch ] = useReducer(movieReducer,{
    movie : null,
    loading : true,
    error : null
   });

   useEffect(()=>{

    const controller = new AbortController();
    const signal = controller.signal; 
    const fetchMovie = async(signal)=>{
        //header
        const options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${ACCESS_TOKEN}`
            },
            signal
        }

        //signal
        try{
            const response =  await fetch(`https://api.themoviedb.org/3/movie/${movieid}`,options);
            if(!response.ok) throw new Error(response.status);
            const data = await response.json();
            console.log(data);
            dispatch({ type : 'movie', movie : data})
        }catch(err){
            if(err.name!='AbortError'){
                 dispatch({ type : 'error' , error :  err.message });
            }
        }finally{
            dispatch({ type : 'loading' })
        }
        
    }
    fetchMovie(signal);

    return ()=> controller.abort();
   },[]);

    return <>
    { state.error && <p> {state.error}</p> }
    { state.loading && <Loading /> }
    { state.movie && <motion.section 
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    transition={{ duration : 0.7 }}
    className="p-4">
        <div className="dark:bg-bg-secondary-dark bg-bg-secondary-light grid gap-4 grid-cols-[auto_1fr] max-sm:flex max-sm:flex-col ">
            <img className="w-[200px]" src={POSTER_BASE_URL+state.movie.poster_path} alt="" />
            <div className="p-4 flex flex-col gap-2   ">
                <h1 className="text-2xl">{state.movie.title}</h1>
                <div className="flex flex-col gap-2">
                    <p>{state.movie.tagline}</p>
                    <div className="flex gap-1 flex-wrap">
                        <Genre genres={state.movie.genres} />
                    </div>
                    <p>{state.movie.release_date}</p>
                    <p>{state.movie.overview}</p>
                </div>
                
            </div>
        </div>
        <div>

        </div>
    </motion.section> }
    </>
}