const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    merchant:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"member",
        enum:["admin","merchant","editor","member"]
    },
    updated:{
        type:Date
    },
    created:{
        type:Date,
        default:Date.now
    },
    facebookId:{
        type:String
    },
    linkedinId:{
        type:String
    },
    randomOtp:{
        type:String
    }
})

module.exports = mongoose.model("user",userSchema)