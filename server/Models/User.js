const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    password: String,
    image: String
})

module.exports = mongoose.model("User", userSchema)