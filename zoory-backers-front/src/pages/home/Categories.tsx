

const Categories = () => {
    const categoryItems=[
        {id:1,title:"Breakfast",des:"(86 dishes)",image:"../../../public/catagories/breakfirst.jpg"},
        {id:2,title:"Lunch",des:"(15 dishes)",image:"../../../public/catagories/lunch.jpg"},
        {id:3,title:"Dinner",des:"(18 dishes)",image:"../../../public/catagories/dinner.jpg"},
        {id:4,title:"Deserts",des:"(20 dishes)",image:"../../../public/catagories/desserts.jpg"},
    ]
    return (
        <div className="section-container py-16 ">
            {/*start categories*/}
            <div className="text-center">
                <p className="subtitle">Customer Favorites </p>
                <h2 className="title">Popular Categories</h2>
            </div>
            {/*start categories card*/}
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
                {
                    categoryItems.map((item,i)=>(
                        <div key={i} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center
                        cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                            <div className="flex w-full mx-auto items-center justify-center">
                                <img src={item.image} alt={item.title} className="  bg-[#FF9800] p-5 rounded-full w-28 h-28 "/>
                            </div>
                              <div className="mt-5 space-y-1">
                                  <h5>{item.title}</h5>
                                  <p>{item.des}</p>
                              </div>

                        </div>
                    ))
                }
            </div>
            {/*end categories card*/}
            {/*end categories*/}
        </div>
    );
};

export default Categories;