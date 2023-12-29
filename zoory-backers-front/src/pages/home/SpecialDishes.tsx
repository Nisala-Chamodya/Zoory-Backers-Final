import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import Cards from "../../component/specialdishes/Cards.tsx";
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
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        ]
    };
    {/*end setting*/}
    return (
        <div className="section-container my-20">
            {/*start special dishes topic*/}
            <div className="text-left">
                <p className="subtitle">Special Dishes </p>
                <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
            </div>
            {/*start react slider*/}
            <Slider {...settings}>
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