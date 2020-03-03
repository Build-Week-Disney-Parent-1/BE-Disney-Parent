
exports.seed = function (knex) {
  return knex('request').insert([
    {
      parent_id: '1',
      vol_id: '',
      meeting_location: 'Tomorrowland Food Court',
      ride: "Star Tours",
      time: "",
      num_children: 5,
      message: ""
    },
  ]);
};
