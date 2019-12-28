const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require(__dirname+'/orders_model.js')

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Shivam:shivam1997@bookservice-toqvh.mongodb.net/order_ser',{useNewUrlParser:true,useUnifiedTopology: true},()=>{
  console.log('Database Connected');
});

app.post("/",(req,res)=>{

  const order = new Order({
    userid:mongoose.Types.ObjectId(req.body.userid),
    bookid:mongoose.Types.ObjectId(req.body.bookid),
    initial_date:req.body.initial_date,
    delivery_date:req.body.delivery_date
  });

  order.save().then(()=>{
    res.send('Order created');
  }).catch((err)=>{
    if(err){console.log(err);}
  });

});

app.listen(4500,() => {
  console.log('Orders Service is Online');
});
