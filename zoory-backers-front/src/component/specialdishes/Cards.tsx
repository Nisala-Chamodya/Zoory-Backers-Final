import {Link} from "react-router-dom";
import {useState} from "react";
import {FaHeart} from "react-icons/fa";

const Cards = ({item}) => {
    {/*start hart fill*/}
    const[isHeartFilled,setIsHeartFilled]=useState(false);

    const handleHeartClicked = () =>{
        setIsHeartFilled(!isHeartFilled)
    }
    {/*end hart fill*/}
    return (


            <div className="card w-96 bg-base-100 shadow-xl relative">
                {/*start handle hart*/}
                <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-[#FF9800] ${isHeartFilled ?
                    "text-rose-500" : "text-black"}`} onClick={handleHeartClicked}>
                    <FaHeart className="h-5 w-5 cursor-pointer"/>
                </div>
                {/*end handle hart*/}
                {/*start desiui card*/}
               <Link to={`/menu/${item._id}`}>
                   <figure><img src={item.image} alt={item.name}  className="hover:scale-90 transition-all duration-200 md:h-72"/></figure>
               </Link>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Description of the item</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <h5 className="font-semibold"><span className="text-sm text-red">R.S.</span> {item.price}</h5>
                        <button className="btn bg-[#FF9800] text-white">Buy Now</button>
                    </div>
                </div>
                {/*end desiui card*/}
            </div>


    );
};

export default Cards;