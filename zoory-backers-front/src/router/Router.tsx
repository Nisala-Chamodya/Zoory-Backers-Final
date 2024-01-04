import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import Home from "../pages/home/Home.tsx";
import Menu from "../pages/shop/Menu.tsx";
import Signup from "../component/signup/Signup.tsx";
import UpdateProfile from "../pages/dashboard/UpdateProfile.tsx";
import CartPage from "../pages/shop/CartPage.tsx";



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
                element:<Menu/>,
            },
            {
                path:"/cart-page",
                element:<CartPage/>
            },
            {
                path:"/update-profile",
                element:<UpdateProfile/>
            }
        ],
    },
    {
        path:"/signup",
        element:<Signup/>
    }
]);
export default router;