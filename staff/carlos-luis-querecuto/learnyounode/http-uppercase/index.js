const http = require('http');
var map = require('through2-map')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    req.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase()
     })).pipe(res)
    
}).listen(process.argv[2]);