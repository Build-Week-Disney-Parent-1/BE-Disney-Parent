const request = require('supertest');
const server = require('./server');

describe('server', () => {
    it('GET /token 200 status', async () => {
        const res = await request(server).get('/token');
        expect(res.status).toBe(200);
    });

    it('GET /token return json', async () => {
        const res = await request(server).get('/token');
        expect(res.type).toBe("application/json");
    });
});