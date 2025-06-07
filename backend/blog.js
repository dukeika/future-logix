const pool = require("./db");

module.exports.handler = async () => {
  try {
    const result = await pool.query(
      "SELECT * FROM blog_posts ORDER BY publish_date DESC"
    );

    console.log("✅ Query succeeded. Rows:", result.rows); // ← Add this

    return {
      statusCode: 200,
      body: JSON.stringify({ posts: result.rows }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("❌ Query failed:", err.message);
    console.error(err.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch posts",
        detail: err.message,
      }),
    };
  }
};
