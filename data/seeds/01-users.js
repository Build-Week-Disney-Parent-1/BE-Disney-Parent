
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
      home_park: ""
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
      home_park: ""
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
      home_park: ""
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
      home_park: ""
    },
    {
      uername: 'Child Care',
      email: 'child@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: ""
    },
    {
      uername: 'Care Taker',
      email: 'care@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: ""
    },
    {
      uername: 'Baby Sitter',
      email: 'baby@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: ""
    },
    {
      uername: 'Donald Duck',
      email: 'donald@email.com',
      password: 'password',
      role: "volunteer",
      about: "",
      address: "",
      age: 0,
      children: "",
      family_size: "",
      home_park: ""
    }
  ]);
};