const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Something about main page");
})

app.get("/profile/:username", function(req, res){
    res.send("This is " + req.params.username +'\'s page');
})

app.get("/author/:username/:age", function(req, res){
    res.send(`Something about ${req.params.username} page who is of ${req.params.age}`);
})

app.listen(3000);