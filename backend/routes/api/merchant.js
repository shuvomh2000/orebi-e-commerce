const express = require("express");
const _ = express.Router();
const {becomeMerchant} = require("../../controllers/marchantController.js")

_.post("/becomemerchant",becomeMerchant);

module.exports = _;