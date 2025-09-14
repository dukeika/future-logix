import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
  Paper,
  Box,
} from "@mui/material";

export default function Pricing() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Detailed Pricing Models
      </Typography>

      <Typography paragraph>
        Transparent, flexible pricing designed to meet your needs — whether
        you're a startup or enterprise.
      </Typography>

      <Paper elevation={3} sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Cloud Solutions
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package</TableCell>
              <TableCell align="center">Starter</TableCell>
              <TableCell align="center">Professional</TableCell>
              <TableCell align="center">Enterprise</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell align="center">₦150,000</TableCell>
              <TableCell align="center">₦500,000</TableCell>
              <TableCell align="center">₦1,200,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Support Duration</TableCell>
              <TableCell align="center">3 Months</TableCell>
              <TableCell align="center">6 Months</TableCell>
              <TableCell align="center">12 Months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Monitoring</TableCell>
              <TableCell align="center">Basic</TableCell>
              <TableCell align="center">Advanced</TableCell>
              <TableCell align="center">24/7 Dedicated</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper elevation={3} sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Serverless Applications
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="center">Simple App</TableCell>
              <TableCell align="center">Complex App</TableCell>
              <TableCell align="center">Enterprise App</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Price Range</TableCell>
              <TableCell align="center">₦800k – ₦1.5M</TableCell>
              <TableCell align="center">₦2M – ₦4M</TableCell>
              <TableCell align="center">₦5M – ₦10M</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Support Duration</TableCell>
              <TableCell align="center">3 Months</TableCell>
              <TableCell align="center">6 Months</TableCell>
              <TableCell align="center">12 Months</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="textSecondary">
          Custom quotes available upon request. All packages include support,
          training, and documentation.
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Request a Free Quote
        </Button>
      </Box>
    </Container>
  );
}
