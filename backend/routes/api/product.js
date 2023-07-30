const express = require("express");
const _ = express.Router();
const {secureUpload,createUplaod} =require("../../controllers/productController.js")

_.post("/craeteproduct",secureUpload,createUplaod);

module.exports = _;