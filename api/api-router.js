const router = require('express').Router();

const authRouter = require('../routers/auth-router');
const userRouter = require('../routers/user-router');
const requestRouter = require('../routers/request-router');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/request', requestRouter);

router.get('/', (req, res) => {
    res.json('Disney Parent API');
});

module.exports = router;