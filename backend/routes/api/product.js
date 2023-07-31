const express = require("express");
const _ = express.Router();
const {secureUpload,createUplaod,createVariant} =require("../../controllers/productController.js")

_.post("/createproduct",secureUpload,createUplaod);
_.post("/createvariant",createVariant);

module.exports = _;