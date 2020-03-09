const request = require('supertest');
const req = require('../api/server');
const db = require('../data/dbConfig');
const Quest = require('../models/request-model');
const bc = require('bcryptjs');

async function createRequest(parent_id, meeting_location, ride, num_children) {
    const quest = {
        'parent_id': parent_id,
        'meeting_location': meeting_location,
        'ride': ride,
        'num_children': num_children
    };

    await Quest.add(quest);
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

describe('POST in REQUEST', () => {
    it('/ returns a 201 status and a JSON', async () => {
        const res = await request(req)
            .post('/api/request')
            .send({
                'parent_id': 3,
                'meeting_location': 'Tomorrowland',
                'ride': 'Star Tours',
                'num_children': 3
            });
        expect(res.status).toBe(201);
        expect(res.type).toBe('application/json');
    });
});

describe('PUT in REQUEST', () => {
    it('/:id is protected and returns a JSON', async () => {
        const res = await request(req)
            .put('/api/request/1')
            .send({
                'vol_id': 2,
                'accepted': 1
            });
        expect(res.body.message).toBe('You need to sign in!');
        expect(res.type).toBe('application/json');
    });
});

describe('DELETE in REQUEST', () => {
    it('/:id ', async () => {
        await createRequest(3, 'Tomorrowland', 'Star Tours', 3);
        const res = await request(req)
            .delete('/api/request/1');
            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Successfully removed request.');
    });
});

beforeEach(async () => {
    await db('request').truncate();
});