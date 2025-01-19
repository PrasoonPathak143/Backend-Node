const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require("connect-flash");

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "your choice"
}));
app.use(flash());

app.get("/", function(req,res,next){
    req.flash("error","Invalid Creds");
    res.redirect("/error");
});

app.get("/error", function(req, res, next){
    let msg = req.flash("error");
    res.send(msg);
})

app.listen(3000);
