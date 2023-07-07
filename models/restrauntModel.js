const mongoose = require("mongoose");

const restrauntModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  details: {
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    }
  }
});


module.exports = mongoose.model('restraunts',restrauntModel);