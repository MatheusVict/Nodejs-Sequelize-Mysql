var http = require('http');

http.createServer(function(req, res){
    res.end("Tu linda")
}).listen(5500);

console.log('Ta on pai');