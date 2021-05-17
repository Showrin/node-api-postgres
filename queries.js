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

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
    [name, email],
    (error, result) => {
      if (error) {
        response.status(500);
      }

      response.status(201).send(`User's created with id: ${result.rows[0].id}`);
    }
  );
};

const updateUserById = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id',
    [name, email, id],
    (error, result) => {
      if (error) {
        response.status(500);
      }

      response.status(201).send(result.rows);
    }
  );
};

module.exports = { getAllUsers, getUserById, createUser, updateUserById };
