
import {Outlet} from "react-router-dom";
import Navbar from "../component/navbar/Navbar.tsx";
import "../App.css"
const Main = ()=>{
    return(
        <div>
            <Navbar/>
            <Outlet/>

        </div>
    )
}
export default Main