import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }){
    const [ theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        if(theme=='dark') document.querySelector('html').classList.add('dark');
        if(theme=='light') document.querySelector('html').classList.remove('dark');
    },[theme])

    return <>
    <ThemeContext.Provider value={{ theme, setTheme}}>
        { children }
    </ThemeContext.Provider>

    </>;
}