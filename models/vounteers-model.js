const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('vols')
        .select('id', 'name', 'email');
};

function findBy(filter) {
    return db('vols')
        .where(filter);
};

async function add(user) {
    const [id] = await db('vols').insert(user);

    return findById(id);
};

function findById(id) {
    return db('vols')
        .where({ id })
        .first();
};