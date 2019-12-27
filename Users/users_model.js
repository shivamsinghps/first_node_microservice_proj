const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name:{
    type:String,
    maxlength:50,
    required:true
  },
  age:{
    type:Number,
    required:false
  },
  address:{
    type:String,
    required:true,
  },
  contact:{
    type:Number,
    required:true
  }
});

const User = mongoose.model("User",UserSchema);
module.exports = User;
