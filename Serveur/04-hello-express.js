const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware de log
app.use(morgan('dev'));
/*
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
*/
/*
app.use('/api', (req, res, next) => {
    console.log(req.headers);
    if (req.headers.authorization === '123') {
        return next();
    }

    res.statusCode = 401;
    res.json({
        message: 'Bad or missing token'
    });
});
*/
app.get('/', (req, res, next) => {
    res.send('<h1>Home page</h1>');
});

app.get('/api/contact/123', (req, res, next) => {
    res.json({
        prenom: 'Romain'
    });
});

app.get('/goto-google', (req, res, next) => {
    res.redirect('http://www.google.fr/');
});

app.use('/api', (req, res, next) => {
   res.statusCode = 404;
   res.json({
       message: 'Not Found'
   })
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send('<h1>Not found</h1>')
});

app.listen(8080, () => {
    console.log('HTTP Server started on port 8080');
});