const router = require('express').Router();

const Parents = require('../models/parents-model');
const Volunteers = require('../models/vounteers-model');
const restricted = require('../middleware/restricted-middleware');

router.get('/parents', restricted, (req, res) => {
    Parents.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send({ message: "Try again later.", err }));
});

router.get('/volunteers', restricted, (req, res) => {
    Volunteers.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send({ message: "Try again later.", err }));
});

module.exports = router;