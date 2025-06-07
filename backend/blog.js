// blog.js
const pool = require("./db");

module.exports.handler = async () => {
  try {
    const result = await pool.query(
      "SELECT * FROM blog_posts ORDER BY publish_date DESC"
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ posts: result.rows }),
      headers: {
        "Access-Control-Allow-Origin": "*", // CORS for frontend
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch posts" }),
    };
  }
};
