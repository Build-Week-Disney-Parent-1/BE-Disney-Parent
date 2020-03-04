const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findByUser
};

function find() {
    return db('request');
};

function findBy(filter) {
    return db('request')
        .where(filter);
};

async function add(data) {
    const [id] = await db('request').insert(data, "id");

    return findById(id);
};

function findById(id) {
    return db('request')
        .where({ id })
        .first();
};

function update(data, id) {
    return db('request')
        .where({ id })
        .update(data);
};

function remove(id) {
    return db('request')
        .where({ id })
        .del();
};

function findByUser(id) {
    return db('request')
        .where({ parent_id: id });
};