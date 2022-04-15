const mongoose = require("mongoose");

const authUserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email_phone:{
     type:String,
  },
  email:{
    type:String,
    required:true
  },
  username: {
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true,
  },
  level:{
      type:String,
      required:true,
      default:'0'
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default:'active'
  },
});

module.exports = authUserSchema;