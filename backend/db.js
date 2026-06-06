const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "store_rating",
  password: "ishaan",
  port: 5432,
});

module.exports = pool;