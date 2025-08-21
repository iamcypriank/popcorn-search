import { POSTER_BASE_URL } from "../config/keys"

export default function MovieCard({ list }){
    
    return (
        list.map((movie)=>{
            return <div key={movie.id}>
                <img src={POSTER_BASE_URL+movie.poster_path} alt="" />
            </div>
        })
    )
}