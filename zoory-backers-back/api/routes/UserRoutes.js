



const express =require('express');
const  router= express.Router();

const userController=require('../controllers/userControllers');
const verifyToken=require('../middleware/verifyToken');
const verifyAdmin =require('../middleware/verifyAdmin')
/*
router.get('/', verifyToken,verifyAdmin,userController.getAllUsers);
router.post('/',userController.createUser);
router.delete('/:id',verifyToken,verifyAdmin,userController.deleteUser);
router.get('/admin/:email',userController.getAdmin);
router.patch('/admin/:id',verifyToken,verifyAdmin,userController.makeAdmin);

*/
router.get('/',userController.getAllUsers);
router.post('/',userController.createUser);
router.delete('/:id',userController.deleteUser);
router.get('/users/admin/:email',userController.getAdmin);
router.patch('/admin/:id',userController.makeAdmin);

    module.exports=router;