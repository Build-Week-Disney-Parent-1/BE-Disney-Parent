
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Walt Disney', email: 'walt@email.com', password: 'password', role: "parent"},
    {username: 'Ub Iwerks', email: 'ub@email.com', password: 'password', role: "parent"},
    {username: 'Mickey Mouse', email: 'mickey@email.com', password: 'password', role: "parent"},
    {username: 'Oswald Rabbit', email: 'oswald@email.com', password: 'password', role: "parent"},
    {username: 'Child Care', email: 'child@email.com', password: 'password', role: "volunteer"},
    {username: 'Care Taker', email: 'care@email.com', password: 'password', role: "volunteer"},
    {username: 'Baby Sitter', email: 'baby@email.com', password: 'password', role: "volunteer"},
    {username: 'Donald Duck', email: 'donald@email.com', password: 'password', role: "volunteer"}
  ]);
};
