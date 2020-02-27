const router = require('express').Router();
const bc = require('bcryptjs');

const Parents = require('../models/parents-model');
const Volunteers = require('../models/vounteers-model');
const regMiddleware = require('../middleware/register-error-middleware');
const loginMiddleware = require('../middleware/login-error-middleware');

router.post('/register/parents',  async (req, res) => {
    const data = req.body;
    data.password = bc.hashSync(data.password, 12);

    try {
        const reg = await Parents.add(data);
        res.status(201).json(reg);
    } catch (err) {
        res.status(500).json({ message: 'Could not register user, please try again later.', err });
    }
});

router.post('/register/volunteers', regMiddleware, async (req, res) => {
    const data = req.body;
    data.password = bc.hashSync(data.password, 12);

    try {
        const reg = await Volunteers.add(data);
        res.status(201).json(reg);
    } catch (err) {
        res.status(500).json({ message: 'Could not register user, please try again later.', err });
    }
});

router.post('/login/parents',  async (req, res) => {
    const { email, password } = req.body;

    try {
        const log = await Parents.findBy({email}).first();

        if (log && bc.compareSync(password, log.password)) {
            req.session.loggedin = true;
            res.status(200).json({ message: `Welcome ${log.email}!` });
        } else {
            res.status(401).json({ message: 'Credentials incorrect, please try again.', err });
        }
    } catch (err) {
        res.status(500).json({ message: 'Could not log parent in, please try again later.', err });
    }
});

router.post('/login/volunteers', loginMiddleware, async (req, res) => {
    const { email, password } = req.body;

    try {
        const log = await Volunteers.findBy(email);

        if (log && bc.compareSync(password, log.password)) {
            req.session.loggedin = true;
            res.status(200).json({ message: `Welcome ${log.email}!` });
        } else {
            res.status(401).json({ message: 'Credentials incorrect, please try again.', err });
        }
    } catch (err) {
        res.status(500).json({ message: 'Could not login, please try again later.', err });
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

module.exports = router;