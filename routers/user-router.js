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
        const users = await Users.findById(id);
        res.json(users);
    } catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;
    const data = req.body;

    Users.findById(id)
        .then(changed => {
            if (changed) {
                Users.update(data, id)
                    .then(updatedUser => {
                        console.log(id);
                        res.status(200).json({ message: 'Updated the user!', updatedUser });
                    });
            } else {
                res.status(404).json({ message: 'Could not find user.' })
            }
        })
        .catch(err => res.status(500).json({ message: 'Failed to update user, try again later.', err }));

    // try {
    //     const changed = await Users.findById(id);

    //     if(changed) {
    //         Users.update(id, data)
    //         .then(updatedUser => {
    //             res.status(200).json({ message: 'Updated the user!' })
    //         })
    //     } else {
    //         res.status(404).json({ message: 'Could not find user.' })
    //     }

    // } catch (err) {
    //     res.status(500).json({ message: 'Failed to update user, try again later.', err })
    // };
});

router.delete('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Users.remove(id);
        res.status(200).json({ message: 'Successfully removed the user.' })
    } catch (err) {
        res.status(500).json({ message: 'Could not remove this user, please try again later.', err })
    }
})

module.exports = router;
