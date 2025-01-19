// browser has a security feature which restricts you to take data from other web domain and show it, if you want to do this, 
// enable cors through server for that website, in that website server you have to enable cors

const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());  // this will enable for all routes

app.get("/", function(req,res,next){
    req.flash("error","Invalid Creds");
    res.redirect("/error");
});

app.get("/error", cors(), function(req, res, next){ // this is only for a specific path
    let msg = req.flash("error");
    res.send(msg);
})

app.listen(3000);


