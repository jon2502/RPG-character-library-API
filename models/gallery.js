const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Characters: {
        type: [String],
        required: true,
    },
    img:{
        type: String,
        required: true
    }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("character_img", schema);