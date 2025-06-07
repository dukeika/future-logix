// backend/server.js
const express = require("express");
const serverless = require("serverless-http");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors"); // For handling cross-origin requests

const app = express();
const prisma = new PrismaClient(); // Initialize Prisma Client

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // Enable CORS for all origins (adjust for production)

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello from FutureLogix Backend!");
});

// Example: Fetch users from DB (assuming you have a 'User' model in Prisma)
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Example Prisma query
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// You will add more routes here for your application logic

// Export for Serverless
module.exports.handler = serverless(app);

// For local development (when running 'node server.js' directly)
if (process.env.NODE_ENV === "development" || process.env.IS_OFFLINE) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(
      `DATABASE_URL: ${process.env.DATABASE_URL ? "Loaded" : "Not Loaded"}`
    );
  });
}
