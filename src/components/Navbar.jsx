import { Outlet, Link } from "react-router-dom";
import { Popcorn, Sun, Moon, Search, Menu} from "lucide-react";
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
        className="h">

            <header 
            className="p-4 bg-bg-secondary-light dark:bg-bg-secondary-dark px-4 flex justify-between items-center sticky top-0 z-50 w-full">

                <Link to="/"><div 
                className="text-font-primary-light dark:text-font-primary-dark text-xl font-bold flex gap-1"> <Popcorn color={`${theme=='dark' ? '#FFFFFF' : '#000' }`} /> <h1 className="max-sm:hidden">PopcornSearch</h1></div></Link>
                
                <div className="flex gap-4  ">     
                    <nav className="flex justify-center items-center gap-4">
                        <Link to="/"><span>Top Rated</span></Link>
                        <Link to="/popular"><span>Popular</span></Link>
                        <Link to="/now_playing"><span>Now Playing</span></Link>
                        <Link to="/upcoming"><span>Upcoming</span></Link>
                        <Button onClick={handleTheme}>
                        { theme=='dark' ? <Moon color='#FFFFFF' size={16} /> : <Sun color='#000' size={16} /> } 
                    </Button>
                    </nav> 
                </div>           
            </header>
            <Outlet />
        </main>
    )
}