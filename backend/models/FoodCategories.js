const mongoose = require('mongoose')

const { Schema } = mongoose;

const FoodCategories = new Schema({
    CategoryName: {
        type: String,
    },
});

module.exports = mongoose.model('food_categories', FoodCategories)