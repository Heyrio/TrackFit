const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    age: { type: String },
    weight: { type: String },
    height: { type: String },
    password: { type: String },

});


const UserInfo = mongoose.model('Members', UserSchema);

module.exports = UserInfo;