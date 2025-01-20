const http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.end("Home page");
    } else if (req.url === '/profile') {
        res.end("Profile page");
    } else {
        res.end("URL is not mentioned");
    }

});

server.listen(3000,function(){
    console.log("server is up");
});