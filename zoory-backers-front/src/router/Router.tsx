import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.tsx";
import Home from "../pages/home/home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path: "/",
                element:<Home/>
            }
        ]
    },
]);
export default router;