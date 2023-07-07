const express = require('express');
const { addRestroController, getRestroController } = require('../controllers/restrauntsController');

const restroRouter = express.Router();

restroRouter.post('/addRestro',addRestroController);

restroRouter.get('/getRestro',getRestroController);

module.exports = restroRouter;