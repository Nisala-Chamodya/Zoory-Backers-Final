//get carts using email
const Carts=require("../model/Carts")
const getCartByEmail=async (req,res)=>{
    try {
        const email=req.query.email;
        const query={email:email};
        const result =await Carts.find(query).exec();
        res.status(200).json(result)
    }catch (error){
        res.status(500).json({message:error.message})
    }
}

//post a cart when add to cart button clicked

const addToCart=async (req,res)=>{
    const {menuItemId,name,recipe,image,price,quantity,email}=req.body;



    try {
        //existing menu item
        const existingCartItem=await Carts.findOne({menuItemId})
        if (existingCartItem){
            return res.status(400).json({message:"Product Already Exists in the cart!"});
        }

        const cartItem=await Carts.create({
            menuItemId,name,recipe,image,price,quantity,email
        })
        res.status(201).json(cartItem)

    }catch (error){
        res.status(500).json({message:error.message})
    }
}


module.exports={
    getCartByEmail,
    addToCart
}