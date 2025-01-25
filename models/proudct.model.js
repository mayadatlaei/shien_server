const { Schema, model } = require("mongoose");

const proudactschema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25,
        minLength: 2,
        split: ""
    },
    price: {
        type: Number
    },
    image: {
        type: String,
    },
    type: { type: String, }

})

const PRODACT_MODEL = model("prodact", proudactschema);
module.exports = PRODACT_MODEL