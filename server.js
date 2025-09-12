const express = require('express');

const app = express();

const PORT = 2000;


app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
    
})