const { Schema, model } = require("mongoose");

const writerschema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25,
        minLength: 2,
        split: ""
    },
    image: {
        type: String,
    },
    booksCollaction: {
        type: [String]
    }
})

const WRITER_MODEL = model("writer", writerschema);
module.exports = WRITER_MODEL