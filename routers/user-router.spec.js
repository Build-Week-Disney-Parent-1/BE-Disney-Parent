const request = require('supertest');
const user = require('../api/server');
const db = require('../data/dbConfig');
const Users = require('../models/users-model');
const bc = require('bcryptjs');

async function createUser(username, email, password, role) {
    const user = {
        'username': username,
        'email': email,
        'password': bc.hashSync(password, 8),
        'role': role
    };

    await Users.add(user);
}

describe('GET in USER', () => {
    it('/ is protected', async () => {
        const res = await request(user)
            .get('/api/users');
            expect(res.body.message).toBe('You need to sign in!');
            expect(res.type).toBe('application/json')
    });

    it('/:id is protected', async () => {
        const res = await request(user)
            .get('/api/users/1')
            expect(res.body.message).toBe('You need to sign in!');
            expect(res.type).toBe('application/json')
    });
});

describe('PUT in USER', () => {
    it('/:id return the status of 200 and correct message', async () => {
        await createUser('test', 'test@test.com', 'password', 'volunteer');
        const res = await request(user)
            .put('/api/users/1')
            .send({
                "username": "tester"
            })
            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Updated the user!');
    });
});

describe('DELETE in USER', () => {
    it('/:id return a deleted message and the proper status', async () => {
        await createUser('test', 'test@test.com', 'password', 'volunteer');
        const res = await request(user)
            .delete('/api/users/1');
            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Successfully removed the user 1.');
    });
});



beforeEach( async () => {
    await db ('users').truncate();
});