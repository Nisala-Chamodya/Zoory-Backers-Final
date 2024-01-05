
const CartPage = () => {
  return (
    <div className="section-container">
           {/*start loading banner */}
           <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
            <div className='flex flex-col items-center justify-center gap-8 py-36 '>
                
                {/*start text*/}
                <div className="px-4 space-y-7">
                    <h2 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
                      Items Added To The <span className="text-[#FF9800]">Cart</span> </h2>
                    
                </div>
                {/*end text*/}



            </div>

        </div>
            {/*end loading banner */}      
    </div>
  )
}

export default CartPage