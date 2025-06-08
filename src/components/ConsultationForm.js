import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  CircularProgress,
  Alert,
} from "@mui/material";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service_of_interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const services = [
    { value: "Cloud Solutions", label: "Cloud & AWS Services" },
    { value: "Library Solutions", label: "Library Solutions" },
    { value: "Custom Development", label: "Custom Development" },
    { value: "Security & Compliance", label: "Security & Compliance" },
    { value: "Other", label: "Other" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch(
        "https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev/consultation",
        {
          // Replace with your actual API URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      setSuccess(true);
      setFormData({
        // Clear form on success
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service_of_interest: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 600,
        margin: "auto",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: 600 }}
      >
        Schedule a Free Consultation
      </Typography>

      {success && (
        <Alert severity="success">
          Your consultation request has been submitted successfully!
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Your Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Phone Number (Optional)"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Company Name (Optional)"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Message / Project Details"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
      />
      <TextField
        select
        label="Service of Interest"
        name="service_of_interest"
        value={formData.service_of_interest}
        onChange={handleChange}
        fullWidth
        helperText="Please select the service you are interested in"
      >
        {services.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={loading}
        sx={{ mt: 2, py: 1.5, fontWeight: 700 }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Submit Request"
        )}
      </Button>
    </Box>
  );
}

export default ConsultationForm;
