const express = require("express");
const _ = express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")
const otpMatch = require("../../controllers/otpMatch.js")

_.post("/registration",registrationControllers);
_.post("/otpmatch",otpMatch);

module.exports = _;
