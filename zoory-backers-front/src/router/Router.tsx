import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import Home from "../pages/home/Home.tsx";
import Menu from "../pages/shop/Menu.tsx";
import Signup from "../component/signup/Signup.tsx";
import UpdateProfile from "../pages/dashboard/UpdateProfile.tsx";
import CartPage from "../pages/shop/CartPage.tsx";
import DashboardLayout from "../layout/DashboardLayout.tsx";

import Dashboard from "../pages/dashboard/admin/Dashboard.tsx";
import Users from "../pages/dashboard/admin/Users.tsx";



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
    },
     
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'users',
                element:<Users/>
            }
        ]
    }
]);
export default router;