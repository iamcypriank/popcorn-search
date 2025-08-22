import { Outlet, Link } from "react-router-dom";
import { Popcorn, Sun, Moon, Menu} from "lucide-react";
import Button from "./Button";
import { useGetTheme } from "../context/ThemeContext";
import { useRef } from "react";
import SearchBar from "./SearchBar";

export default function Header(){

    const menuRef = useRef(null);
    const { theme, setTheme } = useGetTheme();

    function handleTheme(){
        if(theme=='light'){
            setTheme('dark');
        } 
        if(theme=='dark') setTheme('light');
    }

    function handleMenu(){
       const displayProp = menuRef.current.style.display;
       if(displayProp=="") menuRef.current.style.display="flex";
       if(displayProp=="flex") menuRef.current.style.display="";
    }

    return(
        <main 
        className="h">

            <header 
            className="p-4 bg-bg-secondary-light dark:bg-bg-secondary-dark px-4 flex justify-between items-center sticky top-0 z-50 w-full">
                
                <Link to="/">
                <div 
                className=" text-font-primary-light dark:text-font-primary-dark text-xl font-bold flex gap-1"> <Popcorn color={`${theme=='dark' ? '#FFFFFF' : '#000' }`} /> 
                <h1 className="max-sm:hidden">PopcornSearch</h1>
                </div></Link>

                <SearchBar />
                    <Button 
                    onClick={handleMenu}
                    className=""><Menu className="hidden max-lg:flex dark:text-font-primary-dark text-font-primary-light" /></Button>
                    <nav ref={menuRef} 
                    className="hidden max-lg:absolute max-lg:right-0 max-lg:top-15 max-lg:items-start max-lg:flex-col max-lg:p-4  lg:flex  justify-center items-center gap-4  max-lg:dark:bg-bg-primary-dark max-lg:bg-bg-primary-light  ">
                        <Link to="/"><span className="">Top Rated</span></Link>
                        <Link to="/popular"><span>Popular</span></Link>
                        <Link to="/now_playing"><span>Now Playing</span></Link>
                        <Link to="/upcoming"><span>Upcoming</span></Link>
                        <Button onClick={handleTheme}>
                        { theme=='dark' ? <Moon color='#FFFFFF' size={16} /> : <Sun color='#000' size={16} /> } 
                    </Button>
                    </nav>   
            </header>
            <Outlet />
        </main>
    )
}