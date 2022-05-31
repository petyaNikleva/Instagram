export class User {
    constructor(email, firstName, lastName, dateOfBirth, password, image) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.image = image;
    }
}

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     dateOfBirth: {
//         // ??? or type: Date  ??
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         requered: true
//     },
//     image: {
//         type: String
//     }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;