import { Outlet } from "react-router-dom";
import { Popcorn, Sun, Moon, Search } from "lucide-react";
import Button from "./Button";
import { useGetTheme } from "../context/ThemeContext";


export default function Header(){
    const { theme, setTheme } = useGetTheme();

    function handleTheme(){
        if(theme=='light'){
            setTheme('dark');
        } 
        if(theme=='dark') setTheme('light');
    }
    
    return(
        <main 
        className="">

            <header 
            className="p-4 bg-bg-secondary-light dark:bg-bg-secondary-dark px-4 flex justify-between items-center">

                <h1 
                className="text-font-primary-light dark:text-font-primary-dark text-xl font-bold flex gap-1"> <Popcorn color={`${theme=='dark' ? '#FFFFFF' : '#000' }`} /> PopcornSearch</h1> 
                <div className="flex items-center">
                    <input 
                    placeholder="search"
                    className="bg-bg-primary-light dark:bg-bg-primary-dark text-font-primary-light dark:text-font-primary-dark p-1 px-4 rounded-s-lg outline-none" type="text" /> 
                    <div className="py-2 px-2 bg-accent-light rounded-e-lg">
                    <Search
                        size={16} /> 
                    </div>
                </div>
                <nav className="flex justify-center items-center">
                    <Button onClick={handleTheme}>
                     { theme=='dark' ? <Moon color='#FFFFFF' size={16} /> : <Sun color='#000' size={16} /> } 
                   </Button>
                </nav>            
            </header>
            <Outlet />
        </main>
    )
}