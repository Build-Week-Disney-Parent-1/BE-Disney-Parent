const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('parents')
        .select('id', 'username');
};

function findBy(filter) {
    return db('parents')
        .where(filter);
};

async function add(user) {
    const [id] = await db('parents').insert(user);

    return findById(id);
};

function findById(id) {
    return db('parents')
        .where({ id })
        .first();
};