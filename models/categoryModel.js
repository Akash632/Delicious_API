const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String
    }
})

module.exports = mongoose.model('categories', categoryModel);