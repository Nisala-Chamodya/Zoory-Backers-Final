const express=require('express');
const Carts =require('../model/Carts')
const router=express.Router();

const cartController =require('../controllers/cartController')
router.get('/',cartController.getCartByEmail)
router.post('/',cartController.addToCart)


module.exports=router;