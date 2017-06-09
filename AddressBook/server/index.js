const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const routesContacts = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/addressbook');

// Middleware de log
app.use(morgan('dev'));

// Middleware qui héberge les fichiers statiques
app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));

// Routes
app.use('/api/contacts', routesContacts);

// Middleware 404 de l'API REST
app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        message: 'Not found',
    });
});

// Middleware 500 de l'API REST
app.use('/api', (err, req, res, next) => {
    res.statusCode = 500;
    res.json(err);
});

app.listen(port, () => {
   console.log(`App started on port ${port}`);
});