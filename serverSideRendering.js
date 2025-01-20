// steps
// install ejs from npm - npm i ejs
// set - app.set("view engine", "ejs")
// create a views folder
// create a view index.ejs
// load the html in the ejs page
// use res.remder in place of res.send to render any page from views folder

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index");
});

// there is no waywe can add if else or perform any calculation in html
// but with the help of ejs we can do the same
// server creates a html file for the ejs code which ever part is written in ejs

app.get("/profile", function(req, res){
    res.render("profile");
});
// data of get form is visible on URL
app.get("/form", function(req, res){
    res.render("form");
});

app.post("/check", function(req, res){
    console.log(req.body); // if type GET = req.query if POST = req.body
    res.send("Working");
})

app.listen(3000);