const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type:String,
    required:true},
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    password: String,
    image: String,
    isLogged: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema)