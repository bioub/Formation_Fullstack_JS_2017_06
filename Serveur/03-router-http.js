const http = require('http');

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.setHeader('Content-type', 'text/html');
            res.write('<h1>Home page</h1>');
            break;
        case '/api/contact/123':
            res.setHeader('Content-type', 'application/json');
            res.write( JSON.stringify({
                prenom: 'Romain'
            }) );
            break;
        case '/goto-google':
            res.statusCode = 302;
            res.setHeader('Location', 'http://www.google.fr/');
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html');
            res.write('<h1>Page not found</h1>');
    }

    res.end();
});

server.listen(8080, () => {
    console.log('HTTP Server started on port 8080');
});