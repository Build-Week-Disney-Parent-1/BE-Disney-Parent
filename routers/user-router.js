const router = require('express').Router();

const Parents = require('../models/parents-model');
const Volunteers = require('../models/vounteers-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Parents.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send({ message: "You shall not pass!", err }));
});

router.get('/', restricted, (req, res) => {
    Volunteers.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send({ message: "You shall not pass!", err }));
});

module.exports = router;