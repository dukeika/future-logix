import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001529",
        color: "#fff",
        py: [6, 8], // Padding top/bottom
        px: [2, 4], // Padding left/right
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Circular Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: 0,
          zIndex: -1,
        }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" fill="#00B74A" opacity="0.2" />
          <circle cx="250" cy="250" r="150" fill="#00B74A" opacity="0.2" />
        </svg>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Text Content */}
          <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
            Powering Nigeria's <span style={{ color: "#00B74A" }}>Digital</span>{" "}
            Future
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Future Logix Limited delivers innovative cloud solutions tailored
            for Nigerian businesses.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="success">
              Our Services
            </Button>
            <Button variant="outlined">Request a Quote</Button>
          </Box>
        </Grid>

        {/* Removed Icon Section */}
        {/* <Grid item xs={12} md={6}>
          {/* Icons Section */}
        {/* <Card
            sx={{
              maxWidth: 345,
              bgcolor: '#F0F0F0',
              borderRadius: '50%',
              p: 2,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 0,
            }}
          >
            <CardContent>
              {/* Icon Grid */}
        {/* <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="AWS Icon"
                    image="https://example.com/aws-icon.png" 
                    title="AWS Icon"
                    sx={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                </Grid>
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="Security Icon"
                    image="https://example.com/security-icon.png" 
                    title="Security Icon"
                    sx={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                </Grid>
                <Grid item>
                  <CardMedia
                    component="img"
                    alt="Document Icon"
                    image="https://example.com/document-icon.png" 
                    title="Document Icon"
                    sx={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default HeroSection;
