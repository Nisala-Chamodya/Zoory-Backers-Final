
import {Outlet} from "react-router-dom";
import Navbar from "../component/navbar/Navbar.tsx";
import "../App.css"
import Footer from "../component/footer/Footer.tsx";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider.tsx";


const Main = ()=>{
    const {loading} = useContext(AuthContext)
    return(
        <div className="min-h-screen bg-primaryBG">
           {
             <div>
             <Navbar/>
            <Outlet/>
            <Footer/>
            </div>

            
          
            }
           
        </div>
    )
}
export default Main