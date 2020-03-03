const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('users')
        .select('id', 'username', 'email', 'role');
};

function findBy(filter) {
    return db('users')
        .where(filter);
};

async function add(data) {
    const [id] = await db('users').insert(data, "id");

    return findById(id);
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};

function update(data, id) {
    return db('users')
        .where({ id })
        .change(data);
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
