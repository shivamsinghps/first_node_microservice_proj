const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  userid:
  {
    type:mongoose.SchemaTypes.ObjectId,
    required:true
  },
  bookid:
  {
    type:mongoose.SchemaTypes.ObjectId,
    required:true
  },
  initial_date:
  {
    type:Date, 
    required:true
  },
  delivery_date:
  {
    type:Date,
    required:true
  },
});

const Order=mongoose.model("Order",OrderSchema);

module.exports = Order;
