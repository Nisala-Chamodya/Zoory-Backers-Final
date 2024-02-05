const express =require('express');
const  router= express.Router();
const Menu=require('../model/Menu');

const menuController = require('../controllers/menuControllers')



//get all menu items
router.get('/',menuController.getAllMenuItems);

//post a menu item
router.post('/',menuController.postMenuItem);

module.exports=router;