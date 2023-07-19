const mongoose = require('mongoose');





const dbConnection= ()=>{
    mongoose.connect('mongodb+srv://shuvomh:01738622011@cluster0.onlmngs.mongodb.net/trali?retryWrites=true&w=majority').then(()=>{
        console.log("DB Connected")
    })
}

module.exports = dbConnection