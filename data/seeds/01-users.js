
exports.seed = function(knex) {
  return knex('users').insert([
    {name: 'Walt Disney', email: 'walt@email.com', password: 'password', role: "parent"},
    {name: 'Ub Iwerks', email: 'ub@email.com', password: 'password', role: "parent"},
    {name: 'Mickey Mouse', email: 'mickey@email.com', password: 'password', role: "parent"},
    {name: 'Oswald Rabbit', email: 'oswald@email.com', password: 'password', role: "parent"}
    {name: 'Child Care', email: 'child@email.com', password: 'password', role: "volunteer"},
    {name: 'Care Taker', email: 'care@email.com', password: 'password', role: "volunteer"},
    {name: 'Baby Sitter', email: 'baby@email.com', password: 'password', role: "volunteer"},
    {name: 'Donald Duck', email: 'donald@email.com', password: 'password', role: "volunteer"}
  ]);
};
