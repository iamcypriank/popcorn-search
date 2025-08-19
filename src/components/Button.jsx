import { Children } from "react";

export default function Button({ children, vairant="primary", type="button", size="m", onClick}){
    let style='';


    return<button onClick={(e)=>{
        if(type!="submit"){
            e.preventDefault();
            onClick();
        }}}

        className={style}
        >
        { children }
    </button>
}