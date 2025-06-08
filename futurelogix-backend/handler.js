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

// Lambda to get all blog posts
module.exports.getBlogPosts = async (event) => {
  let client;
  try {
    client = await connectToDatabase();
    const result = await client.query(
      "SELECT id, title, slug, excerpt, image_url, created_at FROM blog_posts ORDER BY created_at DESC"
    );
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (adjust for production)
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
        message: "Failed to retrieve blog posts",
        error: error.message,
      }),
    };
  } finally {
    if (client) {
      await client.end();
    }
  }
};

// Lambda to get a single blog post by slug
module.exports.getBlogPostBySlug = async (event) => {
  let client;
  try {
    const { slug } = event.pathParameters;
    client = await connectToDatabase();
    const result = await client.query(
      "SELECT * FROM blog_posts WHERE slug = $1",
      [slug]
    );

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
    console.error(
      `Error fetching blog post with slug ${event.pathParameters.slug}:`,
      error
    );
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Failed to retrieve blog post",
        error: error.message,
      }),
    };
  } finally {
    if (client) {
      await client.end();
    }
  }
};

// Lambda to submit a consultation form
module.exports.submitConsultation = async (event) => {
  let client;
  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, company, message, service_of_interest } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: "Name, email, and message are required.",
        }),
      };
    }

    client = await connectToDatabase();
    await client.query(
      "INSERT INTO consultations (name, email, phone, company, message, service_of_interest) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, email, phone, company, message, service_of_interest]
    );

    // Optional: Send an email notification using AWS SES (Simple Email Service)
    // const AWS = require('aws-sdk');
    // const ses = new AWS.SES({ region: process.env.REGION }); // Ensure REGION is set in Lambda env

    // const params = {
    //     Destination: { ToAddresses: ['your-email@example.com'] },
    //     Message: {
    //         Body: { Text: { Data: `New consultation from <span class="math-inline">\{name\} \(</span>{email}):\n\n${message}` } },
    //         Subject: { Data: 'New FutureLogix Consultation Request' },
    //     },
    //     Source: 'your-verified-ses-email@example.com', // Must be a verified SES identity
    // };
    // await ses.sendEmail(params).promise();

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Consultation request submitted successfully!",
      }),
    };
  } catch (error) {
    console.error("Error submitting consultation:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Failed to submit consultation request",
        error: error.message,
      }),
    };
  } finally {
    if (client) {
      await client.end();
    }
  }
};
