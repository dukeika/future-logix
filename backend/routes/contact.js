// backend/routes/contact.js
const express = require("express");
const router = express.Router(); // Create an Express router
const prisma = require("../utils/prisma"); // Our Prisma client

// POST /api/contact route
// This function will handle requests to /api/contact
router.post("/contact", async (req, res) => {
  // Destructure relevant fields from the request body
  const { fullName, email, phone, subject, message } = req.body;

  // 1. Validate incoming data
  if (!fullName || !email || !subject || !message) {
    // If any required field is missing, send a 400 Bad Request response
    return res.status(400).json({
      error:
        "Missing required fields: fullName, email, subject, and message are required.",
    });
  }

  // Basic email format validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address format." });
  }

  try {
    // 2. Save the data to PostgreSQL using Prisma
    const newSubmission = await prisma.contactSubmission.create({
      data: {
        fullName, // Shorthand for fullName: fullName
        email,
        phone, // Will be null if not provided in req.body
        subject,
        message,
        // createdAt field is automatically set by @default(now())
        // id field is automatically set by @default(uuid())
      },
    });

    // 3. Return a success response
    console.log(`Contact form submission successful: ${newSubmission.id}`);
    return res.status(200).json({
      message:
        "Your message has been sent successfully! We will get back to you shortly.",
      submissionId: newSubmission.id,
    });
  } catch (error) {
    // If an error occurs during database operation
    console.error("Error saving contact form submission:", error);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router; // Export the router to be used by server.js
