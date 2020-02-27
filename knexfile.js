// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './data/mouse.db3' },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreigh_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
