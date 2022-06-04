const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bookName : {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    author : {
        type: String, 
        required: true,
        min: 3
    },
    bookFile : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("User" , userSchema)