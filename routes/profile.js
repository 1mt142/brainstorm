const express = require('express')
const router=express.Router()

const mongoose = require('mongoose')
const { verifyToken } = require('../middleware/auth')
const authUserSchema=require('../model/authUser')
const AuthUser = new mongoose.model('AuthUser',authUserSchema)

router.get('/profile',verifyToken,async(req,res,next)=>{
const userInfo= await AuthUser.find({username:req.decoded.user})
res.json({message:"User Found",data:userInfo})
})

module.exports=router;