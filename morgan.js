const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("common"));  // this will enable for all routes

app.get("/", function(req,res,next){
    res.send("Hello World");
});

app.listen(3000);