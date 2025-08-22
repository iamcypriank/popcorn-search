import Button from "./Button"
import { Search } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(){
    const navigate = useNavigate();

    const [ searchInput, updateSearchInput ] = useState('');
    function handleSearch(){
        if(searchInput!=''){
            navigate(`/search/${searchInput}`);
        }
    }

    return <div 
    className="rounded-s-md dark:text-font-primary-dark  flex bg-bg-primary-light dark:bg-bg-primary-dark">
        <input 
        onChange={(e)=>{
            updateSearchInput(e.target.value);
        }}
        className="py-1 px-2 outline-none"
        type="text" placeholder="search" />

        <div className="rounded-e-md  px-2 flex justify-center items-center bg-accent-light">
            <Button onClick={handleSearch}><Search className="text-font-primary-dark" size={16} /></Button></div>

    </div>
}