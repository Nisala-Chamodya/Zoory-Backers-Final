import {useEffect, useState} from "react";
import Cards from "../../component/specialdishes/Cards.tsx";
import {FaFilter} from "react-icons/fa";


const Menu = () => {
    const [menu,setMenu]=useState([]);
    const[filterdItems,setFilterdItems]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState("all");
    const [sortOption,setSortOption]=useState("default");

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


    {/*start show all data*/}
    const showAll = () =>{
        setFilterdItems(menu);
        setSelectedCategory("all");

    }
    {/*end show all data*/}

    {/*start sorting based on A-Z , Z-A, Low-High pricing*/}
      const handleSortChange =(option)=>{
        setSortOption(option)

          let sortedItems =[...filterdItems];

        //logic
          switch (option){
              case "A-Z" :
                  sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                  break;
              case "Z-A" :
                  sortedItems.sort((a, b) => b.name.localeCompare(a.name))
                  break;
              case "low-to-high" :
                  sortedItems.sort((a, b) => a.price - b.price)
                  break;
              case "high-to-low" :
                  sortedItems.sort((a, b) => b.price - a.price)
                  break;
              default : break;
          }

          setFilterdItems(sortedItems);




      }
    {/*end sorting based on A-Z , Z-A, Low-High pricing*/}


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
                {/*start filtering and sorting*/}
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        {/*all categories btns*/}
                        <button onClick={showAll}
                        className={selectedCategory === "all" ? "active" : ""}
                        >All</button>
                        <button onClick={() => filterItems("salad")}
                                className={selectedCategory === "salad" ? "active" : ""}
                        >Buns</button>
                        <button onClick={() => filterItems("pizza")}
                                className={selectedCategory === "pizza" ? "active" : ""}
                        >Rise</button>
                        <button onClick={() => filterItems("soup")}
                                className={selectedCategory === "soup" ? "active" : ""}
                        >kotthu</button>
                        <button onClick={() => filterItems("dessert")}
                                className={selectedCategory === "dessert" ? "active" : ""}
                        >pizza</button>
                        <button onClick={() => filterItems("drinks")}
                                className={selectedCategory === "drinks" ? "active" : ""}
                        >Deserts</button>

                    </div>

                    {/*start sorting base filtering*/}
                    <div className="flex justify-end mb-4 rounded-sm">
                       <div className=" bg-black p-2">
                           <FaFilter className="h-4 w-4 text-white"/>
                       </div>

                        {/*start sorting option button*/}
                        <select name="sort" id="sort"
                        onChange={(e) =>handleSortChange(e.target.value)}
                                value={sortOption}
                                className="bg-black text-white px-2 py-1 rounded-sm" >
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                       </select>
                        {/*end sorting option button*/}
                    </div>
                    {/* end sorting base filtering*/}


                </div>
                {/*end filtering and sorting*/}

                {/*start product cards*/}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {
                        filterdItems.map((item) =>(
                            <Cards key={item._id} item={item}/>
                        ))
                    }
                </div>
                {/*end product cards*/}

            </div>
            {/*end menu shop section*/}
        </div>
    );
};

export default Menu;