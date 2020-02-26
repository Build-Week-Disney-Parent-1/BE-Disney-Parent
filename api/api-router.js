const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Disney Parent API');
});

module.exports = router;