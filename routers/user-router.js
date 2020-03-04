const router = require('express').Router();

const Users = require('../models/users-model');
const restricted = require('../middleware/restricted-middleware');

router.get('/', restricted, async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

router.get('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findById(id);
        res.json(user);
    } catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

router.put('/:id', restricted, async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const changed = await Users.findById(id);

        if (changed) {
            Users.update(data, id)
                .then(updatedUser => {
                    res.status(200).json({ message: 'Updated the user!', data });
                });
        } else {
            console.log(id);
            res.status(404).json({ message: 'Could not find user.' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update user, try again later.', err })
    }
});

router.delete('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Users.remove(id);
        res.status(200).json({ message: `Successfully removed the user ${id}.` })
    } catch (err) {
        res.status(500).json({ message: 'Could not remove this user, please try again later.', err })
    }
})

module.exports = router;
