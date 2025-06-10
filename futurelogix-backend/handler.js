const { Client } = require("pg");

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Required for some RDS setups, consider true in prod with proper certs
  },
};

// Helper function to connect to DB
async function connectToDatabase() {
  const client = new Client(dbConfig);
  await client.connect();
  return client;
}
