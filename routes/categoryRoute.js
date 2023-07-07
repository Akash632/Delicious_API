const express = require('express');
const { addCategoryController, getCategoryController, deleteCategoryController, updateCategoryController } = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/getCategory',getCategoryController);

categoryRouter.post('/addCategory',addCategoryController);

categoryRouter.put('/updateCategory/:id',updateCategoryController);

categoryRouter.delete('/deleteCategory/:id',deleteCategoryController);

module.exports = categoryRouter;