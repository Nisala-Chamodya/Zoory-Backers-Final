import {Link, useLocation, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {FaHeart} from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2'


const Cards = ({item}) => {
    const{name,image,price,recipe,_id} =item
    {/*start hart fill*/}
    const[isHeartFilled,setIsHeartFilled]=useState(false);
    //start config user
    const{user} =useContext(AuthContext);
   // console.log(user);

   {/*start don,t have an account */}
   const navigate=useNavigate();
   const location=useLocation();
   {/*end don't have an account */}
    

    {/*start  add to cart btn*/}
    const handleAddtoCart = (item) => {
    if (user && user?.email) {
        const cartItem = {
            
            menuItemId:String( _id),
            name:String( item.name),  
            recipe:String(item.recipe),
            image: String(item.image),
             price: Number( item.price),
            quantity:Number(1) ,
            email:String( user.email),
         };  
          
          
        
        console.log(cartItem);
        fetch("http://localhost:6001/carts", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
           
            
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                 Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "The Item Already Added To The Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
                throw new Error(`Failed to add item to cart - ${res.statusText}`);
               
               
            }
        })
        .then((data) => {
            if (data && data.menuItemId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "The Item Added To The Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.error("Unexpected response format:", data);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    } else {
        Swal.fire({
            title: "Please Login?",
            text: "Without an account can't able to add products!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Signup Now!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/signup', { state: { from: location } });
            }
        });
    }
};
    {/*end add cart button */}
    const handleHeartClicked = () =>{
        setIsHeartFilled(!isHeartFilled)
    }
    {/*end hart fill*/}
    return (


            <div className="relative shadow-xl card w-96 bg-base-100">
                {/*start handle hart*/}
                <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-[#FF9800] ${isHeartFilled ?
                    "text-rose-500" : "text-black"}`} onClick={handleHeartClicked}>
                    <FaHeart className="w-5 h-5 cursor-pointer"/>
                </div>
                {/*end handle hart*/}
                {/*start desiui card*/}
               <Link to={`/menu/${item._id}`}>
                   <figure><img src={item.image} alt={item.name}  className="transition-all duration-200 hover:scale-75 md:h-72"/></figure>
               </Link>
                <div className="card-body">
                   <Link to={`/menu/${item._id}`}> <h2 className="card-title">{item.name}</h2></Link>
                    <p>{item.recipe}</p>
                    <div className="items-center justify-between mt-2 card-actions">
                        <h5 className="font-semibold"><span className="text-sm text-red">R.S.</span> {item.price}</h5>
                        <button className="btn bg-[#FF9800] text-white" onClick={() => handleAddtoCart(item)}>Add to Cart</button>
                    </div>
                </div>
                {/*end desiui card*/}
            </div>


    );
};

export default Cards;