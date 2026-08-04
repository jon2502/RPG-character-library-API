const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    System_name: {
        type:String,
        required: true,
    }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("System", schema);