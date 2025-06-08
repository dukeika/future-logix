import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  useTheme,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business"; // For Sales/Business Inquiries
import axios from "axios";

// Define your API URL based on environment
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Data for Contact Cards
const contactMethods = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "General Inquiries",
    details: ["info@futurelogix.com", ""],
    description: "For general questions about our services or company.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Technical Support",
    details: ["support@futurelogix.com", "+234 800 123 4567"],
    description:
      "Need assistance with your cloud infrastructure? Our team is here to help.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Sales & Partnerships",
    details: ["sales@futurelogix.com", "+234 900 765 4321"],
    description:
      "Interested in partnering or learning more about our solutions?",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Our Location",
    details: ["Suite 101, Logix Tower", "Victoria Island, Lagos, Nigeria"],
    description: "Visit us during business hours or send us mail.",
  },
];

export default function Contact() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("Sending your message...");
    setIsSuccess(false);

    if (!validateForm()) {
      setStatusMessage("Please fix the highlighted errors.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/contact`, formData);
      console.log("Backend response:", response.data);
      setStatusMessage(response.data.message || "Message sent successfully!");
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
      setStatusMessage(
        error.response?.data?.error ||
          "Failed to send message. Please try again later."
      );
      setIsSuccess(false);
    }
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Get In Touch With FutureLogix
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
            We're here to help you navigate the complexities of cloud
            technology.
          </Typography>
        </Container>
      </Box>

      {/* Contact Cards Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 6 }}
          >
            Reach Out Through Our Channels
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {contactMethods.map((method, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 6,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{method.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {method.title}
                  </Typography>
                  {method.details[0] && (
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                    >
                      {method.details[0].includes("@") ? (
                        <a
                          href={`mailto:${method.details[0]}`}
                          style={{
                            color: theme.palette.primary.dark,
                            textDecoration: "none",
                          }}
                        >
                          {method.details[0]}
                        </a>
                      ) : (
                        method.details[0]
                      )}
                    </Typography>
                  )}
                  {method.details[1] && (
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                    >
                      {method.details[1].includes("+") ||
                      method.details[1].replace(/\s/g, "").match(/^\d+$/) ? (
                        <a
                          href={`tel:${method.details[1].replace(/\s/g, "")}`}
                          style={{
                            color: theme.palette.primary.dark,
                            textDecoration: "none",
                          }}
                        >
                          {method.details[1]}
                        </a>
                      ) : (
                        method.details[1]
                      )}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 1 }}
                  >
                    {method.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, mx: "auto" }}
          >
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 4 }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              align="center"
              sx={{ mb: 4 }}
            >
              Have a question or need assistance? Fill out the form below, and
              we'll get back to you promptly.
            </Typography>
            {statusMessage && (
              <Box
                sx={{
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: isSuccess
                    ? theme.palette.success.light
                    : theme.palette.error.light,
                  color: isSuccess
                    ? theme.palette.success.contrastText
                    : theme.palette.error.contrastText,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">{statusMessage}</Typography>
              </Box>
            )}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                required
                fullWidth
                label="Your Full Name"
                variant="outlined"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                required
                fullWidth
                label="Your Email Address"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Phone Number (Optional)"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                label="Subject"
                variant="outlined"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
              />
              <TextField
                required
                fullWidth
                label="Your Message"
                multiline
                rows={6}
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ mt: 2, py: 1.5, fontWeight: 600, borderRadius: 2 }}
              >
                Submit Message
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Optional: Map/Location Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 6 }}
          >
            Find Us on the Map
          </Typography>
          <Paper elevation={4} sx={{ borderRadius: 3, overflow: "hidden" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, sm: 400, md: 500 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.palette.grey[200],
                color: theme.palette.text.secondary,
              }}
            >
              <Typography variant="h6">Map Placeholder</Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
