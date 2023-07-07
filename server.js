const express = require('express');
require('dotenv').config();
const connectdb = require('./database/connection');
const userRoute = require('./routes/userRoute');
const restroRouter = require('./routes/restrauntsRoute');
const foodItemsRouter = require('./routes/foodItemsRoute');
const categoryRouter = require('./routes/categoryRoute');

const app = express();

app.use(express.json());

app.use('/api/v1/user',userRoute);

app.use('/api/v1/restraunts',restroRouter);

app.use('/api/v1/foodItems',foodItemsRouter)

app.use('/api/v1/category',categoryRouter)

app.listen(5000,()=>{
    console.log("listening on port 5000");
})