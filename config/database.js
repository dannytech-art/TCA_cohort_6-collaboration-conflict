const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.MONGODB_URI

mongoose.connect(DB)

.then(()=>{
console.log(`Database is connected successfully`);

})
.catch((e)=>{
console.log(`Error is conneting to database:`,err.message);

}) 