import { POSTER_BASE_URL } from "../config/keys"

export default function MovieCard({ list }){
    
    return (
        list.map((movie)=>{
            console.log(movie.release_date);
            return <div key={movie.id} className="relative ">
                <img src={POSTER_BASE_URL+movie.poster_path} alt="" />
            </div>
        })
    )
}