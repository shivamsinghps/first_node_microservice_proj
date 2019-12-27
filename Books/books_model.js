const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  title:{
    type:String,
    maxlength:50,
    required:true
  },
  author:{
    type:String,
    maxlength:30,
    required:true
  },
  pages:{
    type:Number,
    required:true,
  },
  publisher:{
    type:String,
    maxlength:100,
    required:false
  }
});

const Book = mongoose.model("Book",BookSchema);
module.exports = Book;
