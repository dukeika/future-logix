import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Material-UI components
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Box,
  Button, // For potential future reply functionality
} from "@mui/material";

const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // IMPORTANT: Replace with your actual API Gateway URL

const FeedbackAdminPage = () => {
  const [feedbackEntries, setFeedbackEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        // Adjust the path if you used a different one in serverless.yml for getFeedback
        const response = await axios.get(`${API_BASE_URL}/feedback/all`);
        setFeedbackEntries(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching feedback entries:", err);
        setError(
          "Failed to load feedback entries. Please check your backend and network."
        );
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  // Placeholder for "Reply" functionality
  const handleReply = (email, name, message) => {
    // In a real application, you'd open a modal or navigate to a reply form
    // and potentially call a new Lambda function (e.g., sendReplyEmail) using AWS SES.
    const subject = `Reply to your feedback from Future Logix - ${name}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi ${name},\n\nRegarding your message:\n"${message}"\n\n[Your response here]\n\nBest regards,\nFuture Logix Team`
    )}`;

    // Open default email client
    window.open(mailtoLink, "_blank");

    alert(
      `Simulating reply to ${name} (${email}). Check console for mailto link example.`
    );
    console.log("Mailto link generated:", mailtoLink);
  };

  if (loading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Loading feedback entries...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Customer Feedback
      </Typography>

      {feedbackEntries.length === 0 && (
        <Alert severity="info" sx={{ my: 4 }}>
          No feedback entries found.
        </Alert>
      )}

      {feedbackEntries.length > 0 && (
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="feedback table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Message
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Submitted At
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" fontWeight="bold">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbackEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.email}</TableCell>
                  <TableCell
                    sx={{
                      maxWidth: "300px",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {entry.message}
                  </TableCell>
                  <TableCell>
                    {new Date(entry.submitted_at).toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() =>
                        handleReply(entry.email, entry.name, entry.message)
                      }
                      sx={{ textTransform: "none" }}
                    >
                      Reply
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default FeedbackAdminPage;
