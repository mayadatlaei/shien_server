const express = require("express");
const userRouter = express.Router();
const { createUser, findUser, deleteUser, LogIn, UpdetUser} = require ("../controllers/user.controllers");

userRouter .post("/createUser" , createUser);
userRouter .post("/findUser" , findUser);
userRouter .post ("/deleteUser", deleteUser);
userRouter .post ("/LogIn", LogIn);
userRouter .post ("/UpdetUser", UpdetUser);




module.exports = userRouter;