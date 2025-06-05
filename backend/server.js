// backend/server.js
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

// Import your new route files
const contactRoutes = require("./routes/contact");
const blogRoutes = require("./routes/blog");

const app = express();
app.use(express.json());
app.use(cors());

// --- Use your API Routes ---
// Any request starting with /api will be handled by these routes
app.use("/api", contactRoutes); // e.g., /api/contact
app.use("/api", blogRoutes); // e.g., /api/blog/posts, /api/admin/blog/posts

// Basic GET route for the root of your API (still here)
app.get("/", (req, res) => {
  res.status(200).json({ message: "FutureLogix Backend API is running!" });
});

// --- Export for AWS Lambda ---
module.exports.handler = serverless(app);

// --- Local Development Server Setup ---
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Local backend running on http://localhost:${port}`);
    console.log(`DB URL: ${process.env.DATABASE_URL}`);
  });
}
// backend/server.js
// ... (existing imports and app.use calls) ...

// Basic GET route for the absolute root of your API (this is for http://localhost:5000/)
app.get("/", (req, res) => {
  res.status(200).json({ message: "FutureLogix Backend API is running!" });
});

// ********** ADD THIS ROUTE **********
// A specific GET route for the /api/ base.
// This is good for checking if your /api prefix is working and the API endpoints are active.
app.get("/api/", (req, res) => {
  res.status(200).json({ message: "FutureLogix API endpoints are active!" });
});
// ************************************

// --- Export for AWS Lambda ---
module.exports.handler = serverless(app);

// --- Local Development Server Setup ---
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Local backend running on http://localhost:${port}`);
    console.log(`DB URL: ${process.env.DATABASE_URL}`);
  });
}
