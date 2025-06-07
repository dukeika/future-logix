const pool = require("./db");

module.exports.handler = async () => {
  try {
    const res = await pool.query(
      "SELECT * FROM blog_posts ORDER BY publish_date DESC"
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ posts: res.rows }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch posts" }),
    };
  }
};
