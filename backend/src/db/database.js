const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// test propre (NE PAS CRASH SERVER)
pool.query("SELECT NOW()")
  .then(() => console.log("✅ Neon PostgreSQL connecté"))
  .catch((err) => console.log("❌ DB error:", err.message));

module.exports = pool;