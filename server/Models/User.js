const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    password: String,
    image: String
})

module.exports = mongoose.model("User", userSchema);

