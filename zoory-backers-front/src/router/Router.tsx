import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import Home from "../pages/home/Home.tsx";
import Menu from "../pages/shop/Menu.tsx";
import Signup from "../component/signup/Signup.tsx";
import PrivateRouter from "../privaterouter/PrivateRouter.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/menu",
                element:<PrivateRouter><Menu/></PrivateRouter>,
            }
        ],
    },
    {
        path:"/signup",
        element:<Signup/>
    }
]);
export default router;