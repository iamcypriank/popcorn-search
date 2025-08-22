import { POSTER_BASE_URL } from "../config/keys"
import { Link } from "react-router-dom"

export default function MovieCard({ list }){
    console.log(list);
    return (
        list.map((movie)=>{
            return <div key={movie.id} className="p-[6px] border-bg-secondary-light rounded-md dark:bg-bg-secondary-dark bg-bg-secondary-light hover:scale-110 active:scale-90 ease-in-out duration-200 ">
               <Link to={`/movie/${movie.id}`}><img  src={POSTER_BASE_URL+movie.poster_path} alt="" /></Link>
            </div>
        })
    )
}