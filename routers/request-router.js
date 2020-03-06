const router = require('express').Router();

const Request = require('../models/request-model');
const restricted = require('../middleware/restricted-middleware');

router.get('/', restricted, async (req, res) => {
    try {
        const quests = await Request.find();
        quests.forEach(element => {
            element.accepted = !!element.accepted;
        });
        res.json(quests);
    } catch (err) {
        res.send({ message: 'Try again later.', err });
    }
});

router.get('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const quest = await Request.findById(id);
        quest.accepted = !!quest.accepted;
        res.json(quest);
    } catch (err) {
        res.send({ message: 'Try again later.', err });
    }
});

router.get('/user/:id', restricted, async (req, res) => {
    const { id } = req.params;
    try {
        const quests = await Request.findByUser(id);
        quests.forEach(element => {
            element.accepted = !!element.accepted;
        });
        if (quests.length) {    
            
            res.status(200).json({ message: 'List of requests for this user', quests });
        } else {
            res.status(404).json({ message: 'Could not find requests for that user.' })
        }
        
    } catch (err) {
        res.status(500).json({ message: 'Try again later.', err })
    }
});

router.post('/', restricted, async (req, res) => {
    const data = req.body;

    try {
        const quest = await Request.add(data);
        res.status(201).json(quest);
    } catch (err) {
        res.status(500).json({ message: 'Could not create request, please try again later', err })
    }
})

router.put('/:id', restricted, async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const changed = await Request.findById(id);
        quests.forEach(element => {
            element.accepted = !!element.accepted;
        });
        if (changed) {
            Request.update(data, id)
                .then(updatedRequest => {
                    res.status(200).json({ message: 'Updated the request!', data });
                });
        } else {
            console.log(id);
            res.status(404).json({ message: 'Could not find request.' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update request, try again later.', err })
    }
})

router.delete('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Request.remove(id);
        res.status(200).json({ message: 'Successfully removed request.' });
    } catch (err) {
        res.status(500).json({ message: "Could not remove this request, please try again later", err });
    }
});

module.exports = router;