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
  CircularProgress,
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev";

export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent successfully! We'll be in touch soon.",
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "An unexpected error occurred.",
        severity: "error",
      });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ bgcolor: theme.palette.grey[100] }}>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Paper elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>
          {/* This main Grid container ensures both columns are part of the same layout context */}
          <Grid container>
            {/* Left Side: Contact Information. This Grid item will stretch vertically by default. */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                bgcolor: "primary.dark",
                color: "white",
                p: { xs: 4, md: 5 },
                display: "flex", // Using flexbox to help with vertical alignment
                flexDirection: "column",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                {" "}
                {/* This box will grow to fill available space */}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                    <PhoneIcon />
                  </Avatar>
                  <Typography>
                    <Link
                      href="tel:+2348012345678"
                      color="inherit"
                      underline="hover"
                    >
                      +234 (801) 234-5678
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                    <EmailIcon />
                  </Avatar>
                  <Typography>
                    <Link
                      href="mailto:info@futurelogix.com"
                      color="inherit"
                      underline="hover"
                    >
                      info@futurelogix.com
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                    <LocationOnIcon />
                  </Avatar>
                  <Typography>
                    123 Digital Way, Lekki, Lagos, Nigeria
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, mt: 4 }}>
                  Follow Us
                </Typography>
                <IconButton href="#" sx={{ color: "white" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: "white" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton href="#" sx={{ color: "white" }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Right Side: Contact Form */}
            <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 5 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Send a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                {/* ✅ KEY FIX: This Grid container properly organizes the form fields. */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      label="Your Name"
                      required
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Email Address"
                      type="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  {/* ✅ KEY FIX: The message field is in its own Grid item to take the full width */}
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Your Message"
                      required
                      fullWidth
                      // ✅ KEY FIX: These properties make the text field a multi-line box
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  endIcon={!loading && <SendIcon />}
                  sx={{ mt: 3, py: 1.5, fontWeight: 600 }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper,
//   Grid,
//   Link,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// // Replace with your actual deployed API Gateway base URL
// const API_BASE_URL =
//   "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev";

// const ContactContainer = styled(Container)(({ theme }) => ({
//   marginTop: theme.spacing(8),
//   marginBottom: theme.spacing(8),
// }));

// const SectionPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   marginBottom: theme.spacing(4),
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// }));

// const ContactInfoItem = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: theme.spacing(2),
//   "& svg": {
//     marginRight: theme.spacing(1),
//     color: theme.palette.primary.main,
//   },
// }));

// const Form = styled("form")(({ theme }) => ({
//   width: "100%",
//   marginTop: theme.spacing(3),
// }));

// const SubmitButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(3, 0, 2),
// }));

// const Contact = () => {
//   const [feedbackFormData, setFeedbackFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

//   const handleFeedbackChange = (e) => {
//     const { name, value } = e.target;
//     setFeedbackFormData({ ...feedbackFormData, [name]: value });
//   };

//   const handleFeedbackSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${API_BASE_URL}/feedback`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(feedbackFormData),
//       });

//       if (response.ok) {
//         setSnackbarMessage("Feedback submitted successfully!");
//         setSnackbarSeverity("success");
//         setFeedbackFormData({
//           name: "",
//           email: "",
//           message: "",
//         }); // Clear form
//       } else {
//         const errorData = await response.json();
//         setSnackbarMessage(
//           `Failed to submit feedback: ${
//             errorData.message || response.statusText
//           }`
//         );
//         setSnackbarSeverity("error");
//       }
//     } catch (error) {
//       console.error("Error submitting feedback form:", error);
//       setSnackbarMessage(`Error submitting feedback: ${error.message}`);
//       setSnackbarSeverity("error");
//     } finally {
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   return (
//     <ContactContainer component="main" maxWidth="md">
//       {/* Contact Information Section */}
//       <SectionPaper elevation={6}>
//         <Typography component="h1" variant="h4" gutterBottom>
//           Contact Us
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           We'd love to hear from you! Reach out to us through the following
//           channels:
//         </Typography>
//         <Grid
//           container
//           spacing={2}
//           justifyContent="center"
//           sx={{ width: "100%" }}
//         >
//           <Grid item xs={12} sm={6} md={4}>
//             <ContactInfoItem>
//               <EmailIcon />
//               <Typography variant="body1">
//                 Email:{" "}
//                 <Link href="mailto:info@futurelogix.com">
//                   info@futurelogix.com
//                 </Link>
//               </Typography>
//             </ContactInfoItem>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <ContactInfoItem>
//               <PhoneIcon />
//               <Typography variant="body1">
//                 Phone: <Link href="tel:+1234567890">+1 (234) 567-890</Link>{" "}
//                 {/* Replace with your actual phone number */}
//               </Typography>
//             </ContactInfoItem>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <ContactInfoItem>
//               <LocationOnIcon />
//               <Typography variant="body1">
//                 Address: 123 Tech Avenue, Innovation City, CA 90210{" "}
//                 {/* Replace with your actual address */}
//               </Typography>
//             </ContactInfoItem>
//           </Grid>
//         </Grid>
//       </SectionPaper>

//       {/* Feedback Form Section */}
//       <SectionPaper elevation={6}>
//         <Typography component="h2" variant="h4" gutterBottom>
//           Send Us Your Feedback
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           We value your thoughts! Please use the form below to send us your
//           feedback or general inquiries.
//         </Typography>
//         <Form onSubmit={handleFeedbackSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="name"
//                 name="name"
//                 required
//                 fullWidth
//                 id="feedbackName"
//                 label="Your Name"
//                 autoFocus
//                 value={feedbackFormData.name}
//                 onChange={handleFeedbackChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="feedbackEmail"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={feedbackFormData.email}
//                 onChange={handleFeedbackChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="feedbackMessage"
//                 label="Your Message"
//                 name="message"
//                 multiline
//                 rows={5}
//                 value={feedbackFormData.message}
//                 onChange={handleFeedbackChange}
//               />
//             </Grid>
//           </Grid>
//           <SubmitButton
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//           >
//             Submit Feedback
//           </SubmitButton>
//         </Form>
//       </SectionPaper>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbarSeverity}
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </ContactContainer>
//   );
// };

// export default Contact;
