import { createContext, useContext } from "react";

export const ThemeContext = createContext(null); 

export function useGetTheme(){
    return useContext(ThemeContext);
}