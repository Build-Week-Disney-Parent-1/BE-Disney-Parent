const request = require('supertest');
const auth = require('../api/server');
const db = require('../data/dbConfig');
const User = require('../models/users-model');
const bc = require('bcryptjs');

async function createUser(username, email, password, role) {
    const user = {
        username: username,
        email: email,
        password: bc.hashSync(password, 8),
        role: role
    };

    await User.add(user);
}

describe('POST register in AUTH', () => {
    it('/register returns JSON', async () => {
        const res = await request(auth)
            .post('/api/auth/register')
            .send({
                "username": "brester",
                "email": "test@test.com",
                "password": "pass",
                "role": "parent"
            })
            console.log(res.body);    
            expect(res.type).toBe('application/json');
            expect(res.status).toBe(201);
    });

    it('/login returns JSON', async () => {
        const res = await request(auth)
            .post('/api/auth/login')
            .send({
                "email": "test@test.com",
                "password": "pass",
                "role": "parent"
            })
            console.log(res.body);    
            expect(res.type).toBe('application/json');
            expect(res.status).toBe(201);
    });
});

beforeEach( async () => {
    await db ('users').truncate();
});