const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const verifyToken = require('../middleware/verifyToken');

// Route for getting all carts with authorization
router.get('/', verifyToken, cartController.getCartByEmail);

// Route for adding to the cart
router.post('/', cartController.addToCart);

// Route for deleting a cart by ID
router.delete('/:id', cartController.deleteCart);

// Route for updating a cart by ID
router.put('/:id', cartController.updateCart);

// Route for getting a single cart by ID
router.get('/:id', cartController.getSingleCart);

module.exports = router;
