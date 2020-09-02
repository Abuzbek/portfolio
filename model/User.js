const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name:String,
    email:String,
    number:String,
    company:String,
    message:String
})
module.exports = mongoose.model('user' , User)