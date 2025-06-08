import React from "react";
import { AppBar, Toolbar, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent", // Transparent background
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Optional subtle border
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <img
            src="/FUTURELOGIX.png"
            alt="Future Logix Logo"
            style={{
              height: "90px",
              marginRight: "16px",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/FUTURELOGIX.png"
            alt="Future Logix Logo"
            style={{
              height: "50px",
              marginRight: "16px",
            }}
          />
        </Box> */}

        {/* Navigation Menu */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Menu Items */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                color: "#000", // 🔲 Black text for menu items
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A", // Optional: Green on hover
                },
              }}
            >
              Home boy
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A",
                },
              }}
            >
              About Us
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/services"
              color="inherit"
              sx={{
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A",
                },
              }}
            >
              Services
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/case-studies"
              color="inherit"
              sx={{
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A",
                },
              }}
            >
              Case Studies
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/blog"
              color="inherit"
              sx={{
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A",
                },
              }}
            >
              Blog
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{
                color: "#000",
                fontWeight: 600,
                "&:hover": {
                  color: "#00B74A",
                },
              }}
            >
              Contact Us
            </Button>
          </Grid>

          {/* Call to Action Button */}
          <Grid item>
            <Button
              variant="contained"
              href="/contact"
              sx={{
                backgroundColor: "#000", // Black background
                color: "#f9f9f9", // Very light (almost white) text
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "#333",
                  color: "#fff",
                },
              }}
            >
              Get a Free Consultation
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
