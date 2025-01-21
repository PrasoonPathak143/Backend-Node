const express = require('express');
const app = express();

app.get("/", function(req, res, next){
    try{
        res.send(hey);
    }
    catch(err){
        next(err);
    }
})

app.use((err, req, res, next) =>{
    res.status(500).send(err.message);
})

app.listen(3000);

// if top level code is incorrect then app ceashes
// like spelilng or syntax app.fet() or expessss();                                         