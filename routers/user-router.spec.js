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

    await User.add(user);
}

describe('GET in USER', () => {
    it('/ is protected', async () => {
        const res = await request(user)
            .get('/api/users');
            expect(res.body.message).toBe('You need to sign in!');
    });

    it('/ returns ', async () => {
        await createUser('John Doe', 'john@doe.com', 'pass', 'parent');
        const
    });
});


beforeEach( async () => {
    await db ('users').truncate();
});