const express=require("express");
const { signinUser,signupUser}=require('../controllers/user.controller.js');

let userRouter=express.Router();

userRouter.post("/signin",signinUser);

userRouter.post("/signup",signupUser);

module.exports=userRouter;