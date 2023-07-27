const express = require("express");
const _ = express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")

_.post("/registration",registrationControllers);

module.exports = _;
