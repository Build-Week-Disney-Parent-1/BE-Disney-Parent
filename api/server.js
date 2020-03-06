const express = require('express');
const jwt = require('jsonwebtoken');

const apiRouter = require('./api-router');
const configureMiddleware = require('../middleware/configure-middleware');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/token', (req, res) => {
    const payload = {
        subject: 'user',
        userid: 'mickey'
    };

    const secret = 'oswaldtherabbit';

    const options = {
        expiresIn: '6hours'
    };

    const token = jwt.sign(payload, secret, options);

    res.json(token);
});

module.exports = server;