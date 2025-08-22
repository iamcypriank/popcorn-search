export default function Genre({ genres }){

    return <>
    { genres.map((genre)=>{
        return <p
        className="w-fit text-xs  px-2 text-font-primary-dark bg-accent-dark dark:bg-accent-light rounded-md" 
        key={genre.name}>{genre.name}</p>
    })}
    </>
}