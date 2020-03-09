const request = require('supertest');
const auth = require('../api/server');
const db = require('../data/dbConfig');
const Users = require('../models/users-model');
const bc = require('bcryptjs');

test.todo('not set up yet');

async function createUser(username, email, password, role) {
    const user = {
        'username': username,
        'email': email,
        'password': bc.hashSync(password, 8),
        'role': role
    };

    await Users.add(user);
}

describe('POST in AUTH', () => {
    // it('/register returns JSON', async () => {
    //     const res = await request(auth)
    //         .post('/api/auth/register')
    //         .send({
    //             'username': 'tester',
    //             'email': 'test@email',
    //             'password': 'password',
    //             'role': 'role'
    //         })
    //         console.log(res);    
    //         expect(res.type).toBe('application/json');
    //         expect(res.status).toBe(201);
    // });

    // it('/login returns JSON', async () => {
    //     await createUser('tester', 'tester@test.com', 'pass', 'parent')
    //     const res = await request(auth)
    //         .post('/api/auth/login')
    //         .send({
    //             "email": "test@test.com",
    //             "password": "pass",
    //             "role": "parent"
    //         })
    //         // console.log(res.body);
    //         expect(res.type).toBe('application/json');
    //         expect(res.status).toBe(200);
    // });
});

beforeEach( async () => {
    await db ('users').truncate();
});