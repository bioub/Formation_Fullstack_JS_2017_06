const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routesContacts = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/addressbook');

// Middleware de log
app.use(morgan('dev'));

// Routes
app.use('/api/contacts', routesContacts);

// Middleware 404 de l'API REST
app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        message: 'Not found',
    });
});

app.listen(port, () => {
   console.log(`App started on port ${port}`);
});