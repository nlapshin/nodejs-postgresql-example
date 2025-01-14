// Подключаем пакет pg и берём Pool как вариант подключения.
const { Pool } = require('pg');

const pool = new Pool({
  host: '0.0.0.0',
  port: 25432,
  database: 'public',
  user: 'root',
  password: 'root',
  max: 3, // Устанавливаем максимум по пулу.
  application_name: 'best-client', // Устанавливем имя приложения.
  query_timeout: 7000 // Устанавливаем таймаут в 5000 миллисекунд (5 секунд)
  // statement_timeout: 15000 // Устанавливаем таймаут в 5000 миллисекунд (5 секунд)
});

async function queryDatabase() {
  try {
    // const res = await pool.query('SELECT email FROM "User"');

    // console.log(res.rows);


    // Получили исключение.

    const res = await pool.query('SELECT pg_sleep(10);');
    // const res = await pool.query('SELECT pg_sleep(3); SELECT pg_sleep(3);');

    console.time('test');

    // Позволяет выполнить несколько асинхронных операций параллельно

    // 5 запросов параллельно, но максимальное количество соединий в пуле - 3
    // await Promise.all([
    //   pool.query('SELECT pg_sleep(10);'),
    //   pool.query('SELECT pg_sleep(10);'),
    //   pool.query('SELECT pg_sleep(10);'),
    //   pool.query('SELECT pg_sleep(10);'),
    //   pool.query('SELECT pg_sleep(10);')
    // ]);

    console.timeEnd('test');

    // 20 секунд

    // console.log('Query result:', res);
  } catch (error) {
    // Тут перехватываем ошибки
    console.error('Query error:', error);
  } finally {
    // Всегда срабатывает в конце, не важно success или failire 
    await pool.end();
  }
}

queryDatabase();
