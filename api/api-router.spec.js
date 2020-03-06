const request = require('supertest');
const api = require('./server');

describe('GET in API', () => {

    it('/ 200 status', async () => {
        const res = await request(api).get('/api');
        expect(res.status).toBe(200);
    });

    it('/ return json', async () => {
        const res = await request(api).get('/api');
        expect(res.type).toBe("application/json");
    });
});