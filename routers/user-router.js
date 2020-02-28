const router = require('express').Router();

const Users = require('../models/users-model');
const restricted = require('../middleware/restricted-middleware');
 
router.get('/users', restricted, (req, res) => {
    Users.find()
        .then(user => {
            res.json(user);
        })
        .catch(err => res.send({ message: "Try again later.", err }));
});

module.exports = router;