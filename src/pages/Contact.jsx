import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Replace with your actual deployed API Gateway base URL
const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev";

const ContactContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const Contact = () => {
  const [feedbackFormData, setFeedbackFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormData({ ...feedbackFormData, [name]: value });
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackFormData),
      });

      if (response.ok) {
        setSnackbarMessage("Feedback submitted successfully!");
        setSnackbarSeverity("success");
        setFeedbackFormData({
          name: "",
          email: "",
          message: "",
        }); // Clear form
      } else {
        const errorData = await response.json();
        setSnackbarMessage(
          `Failed to submit feedback: ${
            errorData.message || response.statusText
          }`
        );
        setSnackbarSeverity("error");
      }
    } catch (error) {
      console.error("Error submitting feedback form:", error);
      setSnackbarMessage(`Error submitting feedback: ${error.message}`);
      setSnackbarSeverity("error");
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <ContactContainer component="main" maxWidth="md">
      {/* Contact Information Section */}
      <SectionPaper elevation={6}>
        <Typography component="h1" variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We'd love to hear from you! Reach out to us through the following
          channels:
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <ContactInfoItem>
              <EmailIcon />
              <Typography variant="body1">
                Email:{" "}
                <Link href="mailto:info@futurelogix.com">
                  info@futurelogix.com
                </Link>
              </Typography>
            </ContactInfoItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactInfoItem>
              <PhoneIcon />
              <Typography variant="body1">
                Phone: <Link href="tel:+1234567890">+1 (234) 567-890</Link>{" "}
                {/* Replace with your actual phone number */}
              </Typography>
            </ContactInfoItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactInfoItem>
              <LocationOnIcon />
              <Typography variant="body1">
                Address: 123 Tech Avenue, Innovation City, CA 90210{" "}
                {/* Replace with your actual address */}
              </Typography>
            </ContactInfoItem>
          </Grid>
        </Grid>
      </SectionPaper>

      {/* Feedback Form Section */}
      <SectionPaper elevation={6}>
        <Typography component="h2" variant="h4" gutterBottom>
          Send Us Your Feedback
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We value your thoughts! Please use the form below to send us your
          feedback or general inquiries.
        </Typography>
        <Form onSubmit={handleFeedbackSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="feedbackName"
                label="Your Name"
                autoFocus
                value={feedbackFormData.name}
                onChange={handleFeedbackChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="feedbackEmail"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={feedbackFormData.email}
                onChange={handleFeedbackChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="feedbackMessage"
                label="Your Message"
                name="message"
                multiline
                rows={5}
                value={feedbackFormData.message}
                onChange={handleFeedbackChange}
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit Feedback
          </SubmitButton>
        </Form>
      </SectionPaper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default Contact;
