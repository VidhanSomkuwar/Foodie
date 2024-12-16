const mongoose = require('mongoose')

const { Schema } = mongoose;

const FoodSchema = new Schema({
    name: {
        type: String,
    },
    CategoryName: {
        type: String,
    },
    image: {
        type: String,
    },
    options: {
        type: Array,
    },
    description: {
        type: String,
    },

});

module.exports = mongoose.model('food_items', FoodSchema)