import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";


const Profile = ({user}) => {
  {/*start logout in gmail */}
  const {logout} = useContext(AuthContext) 
  const auth = getAuth();
   const handleLogout = () =>{
  
    signOut(auth).then(() => {
  // Sign-out successful.
  alert("logout");
  
}).catch((error) => {
  // An error happened.
  alert(error);
});

   }
  {/*end logout in gmail */}

  return (
    <div>
  {/*start drawair section when click image  in desiui*/}
<div className="z-50 drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {
            user.photoURL ?   <img alt="Tailwind CSS Navbar component" src={user.photoURL} />  : <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  />
        }
        </div>
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a href="/update-profile">Profile</a></li>
      <li><a href="/order">Order</a></li>
    <li><a>Setting</a></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
       
        <li><a onClick={handleLogout}>Log Out</a></li>
    </ul>
  </div>
</div>

        
  {/*end drawair section when click image  in desiui*/}
    </div>
  )
}

export default Profile