import { Search } from "lucide-react"

export default function SearchBar(){


    return (
        <div className="flex items-center ">
            <input 
             placeholder="search"
             className="bg-bg-primary-light dark:bg-bg-primary-dark text-font-primary-light dark:text-font-primary-dark p-1 px-4 rounded-s-lg outline-none" type="text" /> 
            <div className="py-2 px-2 bg-accent-light rounded-e-lg">
                 <Search size={16} /> 
            </div>
        </div>
     )
}