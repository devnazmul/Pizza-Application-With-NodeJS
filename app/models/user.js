const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREAT SCHEMA
const userSchema = new Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    userName: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'custome' }
}, {timestamps: true})

// CREAT MODLE
module.exports = mongoose.model('User', userSchema)

