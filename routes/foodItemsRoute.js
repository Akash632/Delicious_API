const express = require('express');
const { addFoodItemController, getFoodItemsController, deleteFoodItemController, updateFoodItemController } = require('../controllers/foodItemsController');

const foodItemsRouter = express.Router();


foodItemsRouter.post('/addFoodItem',addFoodItemController);

foodItemsRouter.get('/getFoodItems',getFoodItemsController);

foodItemsRouter.put('/updateFoodItem/:id',updateFoodItemController);

foodItemsRouter.delete('/deleteFoodItem/:id',deleteFoodItemController);

module.exports=foodItemsRouter;