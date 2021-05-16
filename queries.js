const pool = require('./pool');

const getAllUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
    if (error) {
      response.status(500);
      throw error;
    }

    response.status(200).json(result.rows);
  });
};

module.exports = { getAllUsers };
