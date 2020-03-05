
exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'Walt Disney',
      email: 'walt@email.com',
      password: 'password',
      role: "parent",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 12345
    },
    {
      username: 'Ub Iwerks',
      email: 'ub@email.com',
      password: 'password',
      role: "parent",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 12345
    },
    {
      username: 'Mickey Mouse',
      email: 'mickey@email.com',
      password: 'password',
      role: "parent",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 54321
    },
    {
      username: 'Oswald Rabbit',
      email: 'oswald@email.com',
      password: 'password',
      role: "parent",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 54321
    },
    {
      username: 'Child Care',
      email: 'child@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 11155
    },
    {
      username: 'Care Taker',
      email: 'care@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 11155
    },
    {
      username: 'Baby Sitter',
      email: 'baby@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 55555
    },
    {
      username: 'Donald Duck',
      email: 'donald@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: "",
      pin: 33224
    }
  ]);
};