const express =  require('express');
const mongoose = require('mongoose',{useUnifiedTopology: true});
const Book = require(__dirname+'/books_model.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Shivam:shivam1997@bookservice-toqvh.mongodb.net/book_ser',{useNewUrlParser:true,useUnifiedTopology: true},()=>{
  console.log('Database Connected');
});

app.get("/",(req,res) => {
  res.send('This is the books page');
});

app.post("/",(req,res) => {

const book = new Book({
  title:req.body.title,
  author:req.body.author,
  pages:req.body.pages,
  publisher:req.body.publisher
});

book.save().then(()=>{
  res.send('Book created');
}).catch((err)=>{
  if(err){console.log(err);}
});
});

app.get("/books",(req,res) => {
  Book.find().then((books)=>{
    res.json(books);
});
});

app.get("/book/:id",(req,res) => {
  Book.findById(req.params.id).then((book)=>{
    res.json(book);
});
});

app.delete("/book/:id",(req,res) => {
  Book.findOneAndRemove(req.params.id).then((book)=>{
    res.send(book.title + 'is removed from db');
});
});

app.listen(4555,() => {
  console.log('Books Service is Online');
});
