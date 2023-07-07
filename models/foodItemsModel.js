const mongoose = require('mongoose');

const foodItemModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    serves_for:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    restro_id:{
        type:mongoose.ObjectId,
        ref:'restraunts',
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('foodItems',foodItemModel);