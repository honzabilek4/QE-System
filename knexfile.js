// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'qe-system',
      user: 'postgres',
      password: 'postgres',
      port: 5433,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      schemaName: 'public',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'qe-system',
      user: 'postgres',
      password: 'postgres',
      port: 5433,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      schemaName: 'public',
    },
  },

};
