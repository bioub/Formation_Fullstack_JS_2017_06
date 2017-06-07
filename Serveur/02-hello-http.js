const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write('Hello');
    res.end();
});

server.on('listening', () => {
   console.log('HTTP Server started on port 8080');
});

server.listen(8080);