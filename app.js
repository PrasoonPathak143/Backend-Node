const http = require('http');

var server = http.createServer(function(req, res){
    res.end("Server is running and you are getting data");
});

server.listen(3000,function(){
    console.log("server is up");
});