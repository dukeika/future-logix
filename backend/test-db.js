require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function test() {
  try {
    const res = await pool.query("SELECT * FROM blog_posts LIMIT 1");
    console.log("✅ Blog post fetched:", res.rows[0]);
  } catch (err) {
    console.error("❌ Local error:", err.message);
    console.error("❌ Full error:", err);
  }
}

test();
