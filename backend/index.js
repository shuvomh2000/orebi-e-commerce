const express = require('express')
const app = express()
const routes = require("./routes")
var cors = require('cors')
const DbConnection =require("./config/dbConnect.js")


//middleware 
app.use(express.urlencoded({extended: true}))
app.use(express.json())
DbConnection()
app.use(cors())
app.use(routes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)

//mongodb+srv://shuvomh:<password>@cluster0.onlmngs.mongodb.net/?retryWrites=true&w=majority