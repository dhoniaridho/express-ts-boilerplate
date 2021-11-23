// Update with your config settings.

module.exports = {

  development: {
    migration: {
      directory: './database/migrations'
    },
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      port : 3306,
      password : '',
      database : 'knex'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './database/migrations'
    }
  }

};
