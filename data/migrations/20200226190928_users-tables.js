
exports.up = function(knex) {
    return knex.schema.createTable('parents', tbl => {
        tbl.increments();
        tbl.string('name', 128)
          .notNullable();
        tbl.string('email', 128)
          .notNullable()
          .unique();
        tbl.string('password', 128)
          .notNullable();
    })
    .createTable('vols', tbl => {
        tbl.increments();
        tbl.string('name', 128)
          .notNullable();
        tbl.string('email', 128)
          .notNullable()
          .unique();
        tbl.string('password', 128)
          .notNullable();
    });
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('vols')
        .dropTableIfExists('parents')
    );
};
