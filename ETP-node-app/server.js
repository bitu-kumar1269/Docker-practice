const http = require('http');

const server = http.createServer(function(req, res){
    res.write("Node.js app running inside Docker!");
    res.end();
});

const port = 4000;

server.listen(port, ()=>{
    console.log("Server is runing on port number 4000");
})