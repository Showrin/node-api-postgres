const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config();

const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
