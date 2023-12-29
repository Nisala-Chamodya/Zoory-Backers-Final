import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import Cards from "../../component/specialdishes/Cards.tsx";
import {FaAngleLeft} from "react-icons/fa6";
import {FaAngleRight} from "react-icons/fa";

{/*start implement arrow*/}
const SimpleNextArrow= (props) =>{
    const {className,style,onClick}=props;
    return(
        <div className={className}
             style={{...style, display:"block",background:"red"}}
        onClick={onClick}>
            NEXT
        </div>
    );

};

    const SimplePrevArrow=(props)=>{
        const {className,style,onClick}=props;
        return(
            <div className={className}
                 style={{...style, display:"block",background:"green"}}
                 onClick={onClick}>
                Back
            </div>
        );

    }
{/*end implement arrow*/}
const SpecialDishes = () => {

    {/*start declare recipes*/}
    const [recipies,setResipies]=useState([]);
    const slider=React.useRef(null)

    useEffect(() => {
            fetch("../../../public/menu.json").then(res => res.json()).then(data =>{
               const specials =data.filter((item) => item.category === "popular")
              //  console.log(specials)
                setResipies(specials)
            })
    },[])
    {/*end declare recipes*/}


    {/*start setting*/}
    // @ts-ignore
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

        nextArrow:<SimpleNextArrow/>,
        prevArrow:<SimplePrevArrow/>
    };
    {/*end setting*/}
    return (
        <div className="section-container my-20 relative">
            {/*start special dishes topic*/}
            <div className="text-left">
                <p className="subtitle">Special Dishes </p>
                <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
            </div>

            <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
                <button onClick={ ()=> slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5">
                    <FaAngleLeft className="w-8 h-8 p-1"/>
                </button>
                <button onClick={ ()=> slider?.current?.slickNext() } className="btn p-2 rounded-full ml-5 bg-[#FF9800]">
                    <FaAngleRight className="h-8 w-8 p-1 bg-[#FF9800]"/>
                </button>

            </div>
            {/*start react slider*/}
            <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
                {
                    recipies.map((item,i)=>(
                        <Cards key={i} item={item}/>

                    ))
                }
            </Slider>
            {/*end rect slider*/}
            {/**end special dishes topic*/}
        </div>
    );
};

export default SpecialDishes;