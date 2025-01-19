const express = require('express');
const app = express();
const expressSession = require("express-session"); 
// next to make request go ahead and run further code
app.use(expressSession({
    secret: "random stuff",
    resave: false,
    saveUninitialized: false
}));

app.get('/', function (req, res) {
  res.send('Hello World');
});

// Code for the routes that are not created, always created at end of routes like app.get("*")

app.get("/create", function(req,res){
    req.session.name = true;   // create session with name polo
    res.send("Done");
});

app.get("/check", function(req, res){
    console.log(req.session.name);
    res.send("Checked");
});

app.listen(3000);