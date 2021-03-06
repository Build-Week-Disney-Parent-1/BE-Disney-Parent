const router = require('express').Router();
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../data/secret');

const Users = require('../models/users-model');
const regMiddleware = require('../middleware/register-error-middleware');
const loginMiddleware = require('../middleware/login-error-middleware');

router.post('/register', regMiddleware, async (req, res) => {
    const data = req.body;
    data.password = bc.hashSync(data.password, 12);

    try {
        const reg = await Users.add(data);
        const token = genToken({ created_user: reg, token: token });
        res.status(201).json(reg);
    } catch (err) {
        res.status(500).json({ message: 'Could not register user, please try again later.', err });
    }
});

router.post('/login', loginMiddleware, async (req, res) => {
    const { email, password } = req.body;
    console.log('in the POST LOGIN');
    try {
        console.log('in the TRY');
        const log = await Users.findBy({email}).first();
        if (log && bc.compareSync(password, log.password)) {
            console.log('in the IF');
            const token = genToken(log);
            res.status(200).json({ message: `Welcome ${log.username}!`, token: token });
        } else {
            res.status(401).json({ message: 'Credentials incorrect, please try again.', err });
        }
    } catch (err) {
        res.status(500).json({ message: 'Could not log parent in, please try again later.', err });
    }
});

router.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.status(400).json({ message: 'Not logged out', err });
            } else {
                res.send('See you again soon!');
            }
        })
    } else {
        res.end();
    }
});

function genToken(user) {
    const payload = {
        userid: user.id,
        username: user.username
    };

    const options = { expiresIn: '6hours' };
    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
};

module.exports = router;