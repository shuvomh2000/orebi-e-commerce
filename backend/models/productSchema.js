const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    variants:[
        {
          type: Schema.Types.ObjectId,
          ref: "Variants",
        },
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