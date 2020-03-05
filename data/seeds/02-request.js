
exports.seed = function (knex) {
  return knex('request').insert([
    {
      parent_id: '1',
      vol_id: '',
      meeting_location: 'Tomorrowland Food Court',
      ride: "Star Tours",
      time: "12:15 PM",
      num_children: 5,
      message: "",
      selected: 0
    },
    {
      parent_id: '2',
      vol_id: '7',
      meeting_location: 'Advendureland Food Court',
      ride: "Jungle Cruise",
      time: "10:00 AM",
      num_children: 1,
      message: "",
      selected: 1
    },
    {
      parent_id: '4',
      vol_id: '6',
      meeting_location: 'Critter Country',
      ride: "Splash Mountain",
      time: "5:45 PM",
      num_children: 2,
      message: "",
      selected: 1
    },
    {
      parent_id: '4',
      vol_id: '',
      meeting_location: 'Paradise Pier',
      ride: "Incredicoaster",
      time: "4:30 PM",
      num_children: 2,
      message: "",
      selected: 0
    },
  ]);
};
