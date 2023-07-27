const nodemailer = require("nodemailer")

async function sendMail(email,verify,template){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        // port: 465,
        // secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'shuvomern@gmail.com',
          pass: 'djnraangcklrhdsz'
        }
      });
      
      // async..await is not allowed in global scope, must use a wrapper
    //  function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: 'testpurpase@gmail.com', // sender address
          to: email, // list of receivers
          subject: "please verify your email", // Subject line
        //   text: "Hello world?", // plain text body
          html: template(verify), // html body
        });
      
        // console.log("Message sent: %s", info.messageId);
// }
}

module.exports = sendMail