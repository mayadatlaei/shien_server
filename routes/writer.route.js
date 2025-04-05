const express = require("express");
const { createwriter, findAllwriter } = require("../controllers/writer.controler");
const writerRoute = express.Router();

writerRoute.post("/createwriter", createwriter);
writerRoute.post("/findAllwriter", findAllwriter);

module.exports = writerRoute;