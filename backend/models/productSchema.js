const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const productSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    variants:[
        {
            type:Schema.Types.ObjectId,
            ref:"Variants"
        }
    ],
    store:{
        type: Schema.Types.ObjectId,
        ref:"Store"
    },
    updated:{
        type:Date
    },
    created:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model("Products",productSchema)