const emailValidation = require("../helpers/emailValidation");
const User = require("../models/usersModel.js");
const bcrypt = require("bcrypt")
const otpTemplate =require("../helpers/otpTemplate.js")
const sendMail =require("../helpers/sendMail.js")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registrationControllers =  async (req, res) => {
    const { fullName, email, password } = req.body;
  
    if (!fullName) {
      return res.send({ error: "Enter Fullname" });
    } else if (!email) {
      return res.send({ error: "Enter Email" });
    } else if (!emailValidation(email)) {
      return res.send({ error: "Enter a valid Email" });
    } else if (!password) {
      return res.send({ error: "Enter password" });
    } else {
      let duplicateEmail = await User.find({ email: email });
      if (duplicateEmail.length > 0) {
        return res.send({ error: "email already exits,try another!" });
      }
  
      bcrypt.hash(password,10,function(err,hash){
          const user = new User ({
              fullName,
              email,
              password:hash
          })
          user.save()
          const generator2 = aleaRNGFactory(Date.now());
          const otp = (generator2.uInt32().toString().substring(0,4))
          sendMail(email,otp,otpTemplate)
          res.send({ 
              success: "registration successfull",
              fullName:fullName,
              email:email
          });
      })
    }
  }

  module.exports = registrationControllers