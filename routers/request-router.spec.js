const request = require('supertest');
const req = require('../api/server');
const db = require('../data/dbConfig');
const Users = require('../models/users-model');
const bc = require('bcryptjs');

async function createRequest(parent_id, meeting_location, ride, num_childred) {
    const user = {
        'parent_id': parent_id,
        'meeting_location': meeting_location,
        'ride': ride,
        'num_childred': num_childred
    };

    await Users.add(user);
};

describe('GET in REQUEST', () => {
    it('/ is protected and returns a JSON', async () => {
        const res = await request(req)
            .get('/api/request');
        expect(res.body.message).toBe('You need to sign in!');
        expect(res.type).toBe('application/json');
    });

    it('/:id is protected and returns a JSON', async () => {
        const res = await request(req)
            .get('/api/request');
        expect(res.body.message).toBe('You need to sign in!');
        expect(res.type).toBe('application/json');
    });

    it('/user/:id is protected and returns a JSON', async () => {
        const res = await request(req)
            .get('/api/request');
        expect(res.body.message).toBe('You need to sign in!');
        expect(res.type).toBe('application/json');
    });
});

// describe('POST in REQUEST', () => {
//     it('/ ', async () => {

//         expect().toBe();
//         expect().toBe();
//     });
// });

// describe('PUT in REQUEST', () => {
//     it('/:id ', async () => {

//         expect().toBe();
//         expect().toBe();
//     });
// });

// describe('DELETE in REQUEST', () => {
//     it('/:id ', async () => {

//         expect().toBe();
//         expect().toBe();
//     });
// });

beforeEach(async () => {
    await db('request').truncate();
});