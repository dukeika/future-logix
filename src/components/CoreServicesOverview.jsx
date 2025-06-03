import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

// Icons
import CloudIcon from "@mui/icons-material/Cloud";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import ShieldIcon from "@mui/icons-material/Shield";

export default function CoreServicesOverview() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Expertise at a Glance
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} justifyContent="center">
        {/* Service 1: Cloud Solutions & AWS Services */}
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardActionArea component="a" href="/services/cloud-solutions">
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, textAlign: "center" }}>
                  <CloudIcon fontSize="large" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  Cloud Solutions & AWS Services
                </Typography>
                <Typography variant="body1">
                  Unlock the power of the cloud with expert migration,
                  management, and optimization.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Service 2: Library Management Systems */}
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardActionArea
              component="a"
              href="/services/library-management-systems"
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, textAlign: "center" }}>
                  <BookIcon fontSize="large" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  Library Management Systems
                </Typography>
                <Typography variant="body1">
                  Modernize library operations with tailored Koha, DSpace, and
                  custom solutions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Service 3: Development Services */}
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardActionArea component="a" href="/services/development-services">
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, textAlign: "center" }}>
                  <CodeIcon fontSize="large" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  Development Services
                </Typography>
                <Typography variant="body1">
                  Build robust, scalable, intuitive digital products with
                  full-stack development expertise.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Service 4: Security & Compliance */}
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardActionArea component="a" href="/services/security-compliance">
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, textAlign: "center" }}>
                  <ShieldIcon fontSize="large" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  Security & Compliance
                </Typography>
                <Typography variant="body1">
                  Protect your valuable assets with comprehensive security
                  strategies and compliance adherence.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
