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
        .select('username', 'email', 'role', 'about', 'address', 'age', 'children', 'family_size', 'home_park');
};

function findBy(filter) {
    return db('users')
    .select('username', 'email', 'role', 'about', 'address', 'age', 'children', 'family_size', 'home_park')
        .where(filter);
};

async function add(data) {
    const [id] = await db('users').insert(data, "id");

    return findById(id);
};

function findById(id) {
    return db('users')
        .where({ id })
        .select('username', 'email', 'role', 'about', 'address', 'age', 'children', 'family_size', 'home_park')
        .first();
};

function update(data, id) {
    return db('users')
        .where({ id })
        .update(data);
};

function remove(id) {
    return db('users')
        .select('username', 'email', 'role', 'about', 'address', 'age', 'children', 'family_size', 'home_park')
        .where({ id })
        .del();
};
