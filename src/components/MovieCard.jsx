import { POSTER_BASE_URL } from "../config/keys"
import { Link } from "react-router-dom"
import { motion } from "motion/react"

export default function MovieCard({ list }){
    return (
        list.map((movie)=>{
            return <motion.div 
            initial={{opacity : 0}}
            animate={{opacity : 1}}
            transition={{ duration : 0.7 }}
            key={movie.id} className="p-[6px] border-bg-secondary-light rounded-md dark:bg-bg-secondary-dark bg-bg-secondary-light hover:scale-110 active:scale-90 ease-in-out duration-200 ">
               <Link to={`/movie/${movie.id}`}><img  src={POSTER_BASE_URL+movie.poster_path} alt="" /></Link>
            </motion.div>
        })
    )
}