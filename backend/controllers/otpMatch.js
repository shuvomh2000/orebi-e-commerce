const User = require("../models/usersModel.js")


let emailVerify =async (req,res)=>{
    const {email,randomOTP} =req.body
    let findOTP= await User.find({email:email})

    if(findOTP.length > 0){
        if(randomOTP == findOTP[0].randomOtp){
            let otpDelete = await User.findOneAndUpdate(
                {email},
                {$unset:{randomOtp:""}},
                {new:true}
                )
            res.json({success:"OTP match"})
        }else{
            res.json({error:"OTP not match"})
        }
    }
}

module.exports = emailVerify