
exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 128)
      .notNullable();
    tbl.string('email', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128)
      .notNullable();
    tbl.string('role', 128)
      .notNullable();
    tbl.string('about');
    tbl.string('address');
    tbl.integer('age');
    tbl.string('children');
    tbl.integer('family_size');
    tbl.string('home_park');
  })
    .createTable('request', tbl => {
      tbl.increments();
      tbl.integer('parent_id')
        .notNullable()
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('vol_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('meeting_location');
      tbl.string('ride');
      tbl.string('time');
      tbl.integer('num_children');
      tbl.string('message');
    })
};

exports.down = function (knex) {
  return (knex.schema
    .dropTableIfExists('request')
    .dropTableIfExists('users')
  );
};
