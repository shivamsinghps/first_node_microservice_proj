const express =  require('express');
const mongoose = require('mongoose',{useUnifiedTopology: true});
const User = require(__dirname+'/users_model.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Shivam:shivam1997@bookservice-toqvh.mongodb.net/user_ser',{useNewUrlParser:true,useUnifiedTopology: true},()=>{
  console.log('Database Connected');
});

app.get("/",(req,res) => {
  res.send('This is the users page');
});

app.post("/",(req,res) => {

const user = new User({
  name:req.body.name,
  age:req.body.age,
  address:req.body.address,
  contact:req.body.contact
});

user.save().then(()=>{
  res.send('User created');
}).catch((err)=>{
  if(err){console.log(err);}
});
});

app.get("/books",(req,res) => {
  Book.find().then((users)=>{
    res.json(users);
});
});

app.get("/user/:id",(req,res) => {
  User.findById(req.params.id).then((user)=>{
    res.json(user);
});
});

app.delete("/user/:id",(req,res) => {
  User.findOneAndRemove(req.params.id).then((user)=>{
    res.send(user.name + 'is removed from db');
});
});

app.listen(4550,() => {
  console.log('User Service is Online');
});
