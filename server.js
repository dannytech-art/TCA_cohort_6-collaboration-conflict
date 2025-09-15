const express = require('express');
require("./config/database")
const app = express();
app.use(express.json())
const PORT = 2000;
const customerRouter = require("./router/customersRouter")
const carRouter = require("./router/carBrandsRouter")
app.use(carRouter)
app.use(customerRouter)
app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
    
})