require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
  },
  migrations: { tableName: 'knex_migrations', directory: './migrations' },
  seeds: { directory: './seeds' },
};
