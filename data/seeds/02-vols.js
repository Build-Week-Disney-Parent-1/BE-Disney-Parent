
exports.seed = function(knex) {
  return knex('vols').insert([
    {name: 'Care Taker', email: 'care@email.com', password: 'password'},
    {name: 'Baby Sitter', email: 'baby@email.com', password: 'password'},
    {name: 'Stroller Pusher', email: 'stroller@email.com', password: 'password'},
    {name: 'Donald Duck', email: 'donald@email.com', password: 'password'}
  ]);
};