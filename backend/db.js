const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://foody:shoaib@foody.l91ohmf.mongodb.net/?retryWrites=true&w=majority&appName=foody'

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("Error connecting db : " + err)
        else {
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                })
            });
        }
    })
};
