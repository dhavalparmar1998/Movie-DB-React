import {  createBrowserRouter } from "react-router-dom";
import Homepge from "./components/Homepge";
import Upcoming from "./components/Upcoming";
import Toprated from "./components/Toprated";
import Searchcomp from "./components/Searchcomp";
import Singlepage from "./components/Singlepage";
import Pagenotfound from "./components/Pagenotfound";


const projectRoute = createBrowserRouter([
    {
        path:'/',
        element: <Homepge/>
    },
    {
        path:"/upcoming",
        element:  <Upcoming/>
    },
    {
        path:"/top-rated",
        element: <Toprated/>
    },
    {
        path:'/search-data/:txtrecord',
        element: <Searchcomp/>
    },
    {
        path:'/single-movie/:movieid',
        element: <Singlepage/>
    },
    {
        path: '*',
        element: <Pagenotfound/>
    }
])

export default projectRoute;