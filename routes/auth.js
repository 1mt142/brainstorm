const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose')
const authUserSchema=require('../model/authUser')
const AuthUser = new mongoose.model('AuthUser',authUserSchema)

const { userLogin ,tokenRefresh} = require('../middleware/auth');

dotenv.config();


// create User
router.post('/signup',async(req,res)=>{
  console.log("Requesting");
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new AuthUser({
          name: req.body.name,
          username: req.body.username,
          email_phone:req.body.email_phone,
          email:req.body.email,
          password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({
          message: "Signup was successful!",
      });
  } catch {
      res.status(500).json({
          message: "Signup failed!",
      });
  }
})

router.post('/signin', userLogin, async (req, res) => {
  res.json({
    message: 'SignIn',
    data: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});
router.post('/refresh', tokenRefresh, async (req, res) => {
  res.json({
    message: 'Refresh',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});


module.exports = router;