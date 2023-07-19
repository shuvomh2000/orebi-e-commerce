const express = require('express')
const app = express()
const routes = require("./routes")
var cors = require('cors')
const DB =require("./config/dbConnect.js")


// 
DB()
app.use(cors())
app.use(routes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)

//mongodb+srv://shuvomh:<password>@cluster0.onlmngs.mongodb.net/?retryWrites=true&w=majority