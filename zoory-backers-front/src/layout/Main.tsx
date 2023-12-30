
import {Outlet} from "react-router-dom";
import Navbar from "../component/navbar/Navbar.tsx";
import "../App.css"
import Footer from "../component/footer/Footer.tsx";

const Main = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen"><Outlet/></div>

            <Footer/>


        </div>
    )
}
export default Main