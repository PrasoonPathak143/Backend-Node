const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get("/", function(req, res, next){
   res.send("Slash");
});
app.get("/check", function(req, res, next){ // this is only for a specific path
    console.log(req.cookies.banned);
    res.send("Checking");
})

app.get("/banned", function(req, res, next){ // this is only for a specific path
    res.cookie("banned", "true");
    res.send("Banned");
})

app.listen(3000);