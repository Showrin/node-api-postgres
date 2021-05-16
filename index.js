const express = require('express');
const app = express();
const dotenv = require('dotenv');
const queries = require('./queries');
const routes = require('./routes');

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log('Server is running on port', port);
});

app.get(routes.base, (request, response) => {
  response.status(200).json({
    name: 'node-api-postgres',
    version: '1.0.0',
    description: 'Rest API and basic CRUD app using Node.JS, ExpressJS',
    port,
  });
});
app.get(routes.users.all, queries.getAllUsers);
app.get(routes.users.one, queries.getUserById);
app.post(routes.users.all, queries.createUser);
