// Database connection using Knex
const knex = require('knex');
const { Model } = require('objection');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
  },
});

// Initialize Objection.js
Model.knex(db);

module.exports = db;
