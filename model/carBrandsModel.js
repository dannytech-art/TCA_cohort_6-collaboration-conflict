const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
      carBrand:{
        type: String,
        required: true,
        unique: true
      },
      carModel:{
        type: String,
        required: true,
        unique: true
      },
      dateReleased:{
        type: String,
        required: true,
      },
      customerName:{
        type: String,
        required: true,
        unique: true
      },
      customerIds:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
      },
},{timestamps: true})
const carModel = new mongoose.model('cars',carSchema)

module.exports = carModel