const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>hello world 23<h1>');
    res.end();
}).listen(3000);


