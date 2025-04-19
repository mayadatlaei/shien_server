const { Schema, model } = require("mongoose");

const collictoinschema = new Schema({
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
    ganres: { type: [String], },
    about: { type: String, },
    writerName:{
        type: String, 
    }
})

const COLLICTOIN_MODEL = model("colliction", collictoinschema);
module.exports = COLLICTOIN_MODEL 