const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: true,
    },
    FirstName: {
        type: String,
        required: true,
    },
    MiddleName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    DateOfBirth: {
        type: Date,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    DateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);