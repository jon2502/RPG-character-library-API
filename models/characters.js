const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true
    } ,
    id: {
        type:Number,
        required: true,
        unique: true
    },
    img:{
        type:String,
        required: true
    },
    race:{
        type:String,
        required: true
    },
    culture_background:{
        type:String,
        required: true
    },
    profession_class:{
        type:String,
        required: true
    },
    subclass:{
        type:String,
    },
    place_of_Birth:{
        type:String,
        required: true
    },
    system:{
        type:String,
        required: true
    },
    text:{
        type:[String],
        required: true
    }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("Characters", schema);