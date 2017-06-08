const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.write('Hello client\n');

    socket.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    socket.on('close', (data) => {
        console.log('Client disconnected');
    });
});

server.on('listening', () => {
    console.log('Socket listening on port 1234');
});

server.listen(1234);