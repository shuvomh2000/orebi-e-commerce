const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const storeSchema = new Schema({
    storeName:{
        type:String,
        required:true
    },
    officialEmail:{
        type:String,
        required:true
    },
    officialPhone:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        default:"waiting",
        enum:["waiting","approve","rejected"]
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    updated:{
        type:Date
    },
    created:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model("store",storeSchema)