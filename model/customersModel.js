const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName:{
    type: String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  phoneNumber:{
    type:String,
    required:true,
  },
  carName:{
    type:String,
    required:true,
    unique:true
  },
  carIds:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars'
  }]
},{timestamps: true})

const customermodel =mongoose.model("customers",customerSchema);

module.exports = customermodel