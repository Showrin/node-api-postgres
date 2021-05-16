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

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    if (error) {
      response.status(500);
    }

    response.status(200).json(result.rows);
  });
};

module.exports = { getAllUsers, getUserById };
