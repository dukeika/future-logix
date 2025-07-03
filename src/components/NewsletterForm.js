// src/components/NewsletterForm.js
import React from "react";
import { Box, Typography } from "@mui/material"; // Optional: for consistent styling with your app

function NewsletterForm() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "700px", // Adjust max-width as needed for better layout
        margin: "auto", // Center the form
        py: 4, // Add some vertical padding
        px: { xs: 2, md: 0 }, // Horizontal padding for smaller screens
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, mb: 3 }}
      >
        Subscribe to Our Newsletter
      </Typography>
      <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
        Stay updated with our latest insights, news, and exclusive offers.
      </Typography>
      <div style={{ height: "500px", width: "100%", overflow: "hidden" }}>
        {/* The Zoho Forms iframe */}
        <iframe
          aria-label="Newsletter"
          frameBorder="0"
          style={{ height: "100%", width: "100%", border: "none" }} // Use 100% height and width
          src="https://forms.zohopublic.com/futurelogixlimited1/form/Newsletter1/formperma/yeW6uR7bcwKHUtjbzYpkdMojnM484BrKqqVOfZJiFEM"
        ></iframe>
      </div>
    </Box>
  );
}

export default NewsletterForm;
