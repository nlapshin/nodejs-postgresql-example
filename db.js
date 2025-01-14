const { Pool } = require('pg');

const pool = new Pool({
  host: '0.0.0.0',
  port: 25432,
  database: 'public',
  user: 'root',
  password: 'root',
});

module.exports = pool;
