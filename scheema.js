const scheema = {
  createTable: `CREATE TABLE IF NOT EXISTS users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE
  )`,
  insertUsers: `INSERT INTO users (name, email) VALUES ('admin', 'admin@example.com')
  ON CONFLICT (email) DO NOTHING`,
};

const loadScheema = (pool) => {
  for (let queryName in scheema) {
    pool.query(scheema[queryName], (error, result) => {
      if (error) {
        throw error;
      }
    });
  }
};

module.exports = loadScheema;
