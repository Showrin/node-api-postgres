const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const queries = require('./queries');
const routes = require('./routes');

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port', port);
});

app.get('/', (request, response) => {
  response.status(200).json({
    name: 'node-api-postgres',
    version: '1.0.0',
    description: 'Rest API and basic CRUD app using Node.JS, ExpressJS',
    port,
  });
});

app.get(routes.users.all, (request, response) => {
  queries.getAllUsers(request, response);
});
