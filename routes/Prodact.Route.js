const express =require("express");
const { createProdact, findprodact, deleteprodact } = require("../controllers/ProdactControllers");
const ProdactRoute=express.Router();


ProdactRoute.post("/createdProduct" , createProdact);
ProdactRoute.post("/findprodact" , findprodact);
ProdactRoute.post("/deleteprodact" , deleteprodact);

module.exports = ProdactRoute;
