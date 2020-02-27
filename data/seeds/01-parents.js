
exports.seed = function(knex) {
  return knex('parents').insert([
    {name: 'Walt Disney', email: 'walt@email.com', password: 'password'},
    {name: 'Ub Iwerks', email: 'ub@email.com', password: 'password'},
    {name: 'Mickey Mouse', email: 'mickey@email.com', password: 'password'},
    {name: 'Oswald Rabbit', email: 'oswald@email.com', password: 'password'}
  ]);
};
