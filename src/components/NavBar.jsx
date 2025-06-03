import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/about">
        About
      </Button>
      <Button color="inherit" component={Link} to="/services">
        Services
      </Button>
      <Button color="inherit" component={Link} to="/pricing">
        Pricing
      </Button>
      <Button color="inherit" component={Link} to="/case-studies">
        Case Studies
      </Button>
      <Button color="inherit" component={Link} to="/blog">
        Blog
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact
      </Button>
    </Box>
  );
}
