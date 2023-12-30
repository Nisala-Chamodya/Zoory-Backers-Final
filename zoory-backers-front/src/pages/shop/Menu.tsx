import {useEffect, useState} from "react";


const Menu = () => {
    const [menu,setMenu]=useState([]);
    const[filterdItems,setFilterdItems]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState("all");
    const [sortOption,setStartOption]=useState("default");

    {/*start loading data*/}
     useEffect(()=>{
         {/*start fetch data from the back end*/}
         const fetchData = async ()=>{
             try{
                 const response=await fetch("/menu.json");
                 const data=await response.json();
                // console.log(data)
                 setMenu(data);
                 setFilterdItems(data);
             }catch (error){
                 console.log("Error Fetching Data",error)
             }

         };
         {/*end fetch data from the back end*/}
         //call the function
            fetchData();

     },[])
    {/*end loading data*/}

    {/*start filtering data based on category*/}
    const  filterItems= (category) =>{
        const  fillterd = category === "all" ? menu : menu.filter((item)=> item.category === category);

        setFilterdItems(fillterd);
        setSelectedCategory(category)

    };


    {/*end filtering data based on category*/}

    return (
        <div className="mt-10" >
            {/*start Menu Banner*/}
            <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
                <div className='py-48 flex flex-col  justify-center items-center gap-8'>

                    {/*start text*/}
                    <div className=" text-center space-y-7 px-4">
                        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                            Dive into Delight of Delectable <span className="text-[#FF9800]">Food</span> </h2>
                        <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">Where Each Plate Waves a Story Of Culinary Mastery And
                            Passionate Craftsmanship</p>
                        <button className='btn bg-[#FF9800] px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>
                    {/*end text*/}



                </div>

            </div>
            {/*End Menu Banner*/}

            {/*start menu shop section*/}
            <div className="section-container">

                menu shop section
            </div>
            {/*end menu shop section*/}
        </div>
    );
};

export default Menu;