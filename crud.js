const { Pool } = require('pg');

const pool = new Pool({
  host: '0.0.0.0',
  port: 25432,
  database: 'public',
  user: 'root',
  password: 'root',
  // max: 3 // Устанавливаем максимум по пулу.
  // application_name: 'best-client' // Устанавливем имя приложения.
  // query_timeout: 5000 // Устанавливаем таймаут в 5000 миллисекунд (5 секунд)
  // statement_timeout: 5000 // Устанавливаем таймаут в 5000 миллисекунд (5 секунд)
});

async function queryDatabase() {
  try {
    // Create
    pool.query("INSERT INTO test (name, email) VALUES ($1, $2)", ['John Doe', 'john.doe@example.com'], (err, res) => {
      console.log(err, res);
    });

    // Read
    pool.query('SELECT * FROM test', (err, res) => {
      console.log(err, res.rows);
    });

    // Update
    pool.query("UPDATE test SET name = 'Jane Doe', email = 'jane.doe@example.com' WHERE id = 1", (err, res) => {
      console.log(err, res);
    });

    // Delete
    pool.query('DELETE FROM test WHERE id = 1', (err, res) => {
      console.log(err, res);
    });
  } catch (error) {
    console.error('Query error:', error);
  } finally {
    await pool.end();
  }
}

queryDatabase();
