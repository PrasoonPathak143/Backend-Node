const express = require('express');
const app = express();

var data = [1,2,3,4];

app.get("/", (req,res) => {
    res.send("Slash");
})

app.post("/data/:number", (req, res) => {
    data.push(parseInt(req.params.number));
    res.send(data);
})

app.get("/data", (req, res)=>{
    res.send(data);
})

app.listen(3000);