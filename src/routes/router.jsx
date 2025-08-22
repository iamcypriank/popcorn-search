import { createBrowserRouter } from "react-router-dom"
import Error from "../pages/Erorr"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import Popular from "../pages/Popular"
import Nowplaying from "../pages/Nowplaying"
import Upcoming from "../pages/Upcoming"
import Movie from "../components/Movie"


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
            },
            {
                path : "/now_playing",
                element : <Nowplaying />
            },
            {
                path : "/upcoming",
                element : <Upcoming />
            },
            {
                path : "/movie/:movieid",
                element : <Movie />
            }
        ]
    }
])