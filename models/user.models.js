const { Schema, model } = require("mongoose");

const userschema = new Schema({
    userName: {
        type: String,
        required: true,
        maxLength: 25,
        minLength: 2,
        split: ""
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 12,
    },
    orderHistory: {
        type: Array,
        required: false,
        default: [],
    }



})

const USER_MODEL = model("User", userschema);
module.exports = USER_MODEL