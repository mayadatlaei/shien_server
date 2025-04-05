const express = require("express");
const { createcolliction, findAllcollictin } = require("../controllers/colliction.controler");
// const { createcolliction, findAllcollictin } = require("../models/colliction.controler");

const collictionRoute = express.Router();


collictionRoute.post("/createcolliction", createcolliction);
collictionRoute.post("/findAllcollictin", findAllcollictin);

module.exports = collictionRoute;