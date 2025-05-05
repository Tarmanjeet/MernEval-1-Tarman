const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../db/models/user.js');
let mongoose=require("mongoose");

const signinUser = async (req,res) => {
        let body=req.body;
        const user = await userModel.findOne({email:email.body});
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false,message: "Invalid credentials" });
        }
        const payLoad={
            userId:user._id,
            type:0,
            name:user.name
        }
        const tokenSecret=process.env.tokenSecret;
        const token=sign(payLoad,tokenSecret,{expiresIn:"1h"});
        
        res.status(200).json({ success: true, message: "User signed in successfully",token})  
}

const signupUser = async (req, res) => {
        let body=req.body;
        const existingUser = await userModel.findOne({email:email.body});
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name:name.body,
            email:email.body,
            password: hashedPassword
        });

        await newUser.save();
        if(!newUser){
            res.status(500).json({success:false,message:"Enter valid credentials"});
        }
        res.status(201).json({success: true,message:"User created successfully",user:newUser});
    
}

module.exports={signinUser,signupUser};