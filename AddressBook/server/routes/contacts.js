const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');

const Router = express.Router;

const routes = new Router();

// Liste des contacts
routes.get('/', (req, res, next) => {
    Contact.find('prenom nom', (err, contacts) => {
        if (err) {
            return next(err);
        }
        res.json(contacts);
    });
});

// Ajouter de contact
routes.post('/', bodyParser.json());
routes.post('/', (req, res, next) => {
    const contact = new Contact(req.body);
    contact.save((err, contact) => {
        if (err) {
            return next(err);
        }

        res.statusCode = 201;
        res.json(contact);
    });
});

// Détails d'un contact
routes.get('/:id', (req, res, next) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            return next(err);
        }

        if (!contact) {
            return next();
        }

        res.json(contact);
    });
});

// Remplacer un contact
routes.put('/:id', (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
        if (err) {
            return next(err);
        }
        if (!contact) {
            return next();
        }
        res.json(contact);
    });
});

// Supprimer un contact
routes.delete('/:id', (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, (err, contact) => {
        if (err) {
            return next(err);
        }
        if (!contact) {
            return next();
        }
        res.json(contact);
    });
});

module.exports = routes;