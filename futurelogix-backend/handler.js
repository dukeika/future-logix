// futurelogix-backend/handler.js
const { Client } = require("pg");
const AWS = require("aws-sdk"); // For SES if you're sending emails
const ses = new AWS.SES({ region: process.env.REGION || "eu-west-2" }); // Set your region

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Adjust based on your RDS SSL certificate
  },
};

// Helper function to connect to the database
async function getDbClient() {
  const client = new Client(dbConfig);
  await client.connect();
  return client;
}

// Function to generate a URL-friendly slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}

// Lambda function to create a new blog post
module.exports.createBlogPost = async (event) => {
  const client = await getDbClient();
  try {
    const { title, content, author, image_url } = JSON.parse(event.body);
    const slug = generateSlug(title); // Generate slug from title

    const query = `
      INSERT INTO blog_posts (title, content, author, image_url, slug)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [title, content, author, image_url, slug];
    const result = await client.query(query, values);

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(result.rows[0]),
    };
  } catch (error) {
    console.error("Error creating blog post:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error creating blog post",
        error: error.message,
      }),
    };
  } finally {
    client.end();
  }
};

// Lambda function to get all blog posts
module.exports.getBlogPosts = async (event) => {
  const client = await getDbClient();
  try {
    const result = await client.query(
      "SELECT * FROM blog_posts ORDER BY published_date DESC"
    );
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(result.rows),
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error fetching blog posts",
        error: error.message,
      }),
    };
  } finally {
    client.end();
  }
};

// Lambda function to get a single blog post by slug
module.exports.getBlogPostBySlug = async (event) => {
  const client = await getDbClient();
  try {
    const { slug } = event.pathParameters;
    const query = "SELECT * FROM blog_posts WHERE slug = $1";
    const result = await client.query(query, [slug]);

    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Blog post not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(result.rows[0]),
    };
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error fetching blog post",
        error: error.message,
      }),
    };
  } finally {
    client.end();
  }
};

// Lambda function to update a blog post
module.exports.updateBlogPost = async (event) => {
  const client = await getDbClient();
  try {
    const { id } = event.pathParameters;
    const { title, content, author, image_url } = JSON.parse(event.body);
    const slug = generateSlug(title); // Update slug if title changes

    const query = `
      UPDATE blog_posts
      SET title = $1, content = $2, author = $3, image_url = $4, slug = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [title, content, author, image_url, slug, id];
    const result = await client.query(query, values);

    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Blog post not found for update" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(result.rows[0]),
    };
  } catch (error) {
    console.error("Error updating blog post:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error updating blog post",
        error: error.message,
      }),
    };
  } finally {
    client.end();
  }
};

// Lambda function to delete a blog post
module.exports.deleteBlogPost = async (event) => {
  const client = await getDbClient();
  try {
    const { id } = event.pathParameters;
    const query = "DELETE FROM blog_posts WHERE id = $1 RETURNING id;";
    const result = await client.query(query, [id]);

    if (result.rows.length === 0) {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Blog post not found for deletion" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: `Blog post with ID ${id} deleted successfully`,
      }),
    };
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Error deleting blog post",
        error: error.message,
      }),
    };
  } finally {
    client.end();
  }
};

// Other existing Lambda functions can remain here or be moved to separate files for modularity.
// Example of a placeholder for existing contact form logic (assuming it was removed)
// module.exports.submitContactForm = async (event) => {
//   // Your existing contact form logic
//   // ...
// };
