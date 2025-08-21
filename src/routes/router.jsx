import { createBrowserRouter } from "react-router-dom"
import Error from "../pages/Erorr"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import Popular from "../pages/Popular"


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Navbar />,
        errorElement : <Error />,
        children : [
            {
                index : true,
                element : <Home />
            },{
                path : "/popular",
                element : <Popular />
            }
        ]
    }
])