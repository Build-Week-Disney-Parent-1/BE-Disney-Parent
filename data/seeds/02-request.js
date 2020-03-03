
exports.seed = function (knex) {
  return knex('users').insert([
    {
      parent_id: 'Walt Disney',
      vol_id: 'walt@email.com',
      meeting_location: 'password',
      ride: "parent",
      time: "",
      num_children: 5,
      message: ""
    },
  ]);
};
