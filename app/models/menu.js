const mongoose = require('mongoose')

const Schema = mongoose.Schema
// CREAT SCHEMA
const menuSchema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    size: {type: String, required: true},
    price: {type: Number, required: true}
})

// CREAT MODLE
module.exports = mongoose.model('Menu', menuSchema)

