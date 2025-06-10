import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// The API endpoint URL from your serverless.yml deployment
const API_ENDPOINT =
  "https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev/consultation";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    status: "idle", // 'idle' | 'loading' | 'success' | 'error'
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ status: "loading", message: "Sending your request..." });

    try {
      const response = await axios.post(API_ENDPOINT, formData);
      setFormStatus({
        status: "success",
        message:
          response.data.message || "Your request has been sent successfully!",
      });
      // Clear the form on successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error.response || error);
      const errorMessage =
        error.response?.data?.error ||
        "An unexpected error occurred. Please try again later.";
      setFormStatus({ status: "error", message: errorMessage });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 600, color: "primary.main", mb: 4 }}
      >
        Request a Consultation
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            disabled={formStatus.status === "loading"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            disabled={formStatus.status === "loading"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="phone"
            label="Phone Number (Optional)"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={formStatus.status === "loading"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="company"
            label="Company Name (Optional)"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            disabled={formStatus.status === "loading"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="message"
            label="How can we help you?"
            name="message"
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={formStatus.status === "loading"}
          />
        </Grid>
      </Grid>

      {formStatus.status !== "idle" && (
        <Alert
          severity={formStatus.status === "success" ? "success" : "error"}
          sx={{ mt: 3, mb: 2 }}
        >
          {formStatus.message}
        </Alert>
      )}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        endIcon={formStatus.status !== "loading" && <SendIcon />}
        sx={{ mt: 3, mb: 2, py: 1.5, fontWeight: 600 }}
        disabled={formStatus.status === "loading"}
      >
        {formStatus.status === "loading" ? (
          <CircularProgress size={26} color="inherit" />
        ) : (
          "Submit Request"
        )}
      </Button>
    </Box>
  );
}
