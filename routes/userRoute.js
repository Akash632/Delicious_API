const express = require('express');
const { singUpController, logInController } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/signUp',singUpController);

userRoute.post('/login',logInController)

module.exports = userRoute;