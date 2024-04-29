const express = require('express');
const app=express();
app.get('/api/products',(req, res)=>{
    res.send("Hello")
});
app.listen(1400);