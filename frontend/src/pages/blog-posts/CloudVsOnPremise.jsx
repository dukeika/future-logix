import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";

export default function CloudVsOnPremise() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cost-Benefit Analysis: Cloud vs On-Premise Solutions
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: March 10, 2025
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell align="center">On-Premise</TableCell>
            <TableCell align="center">Cloud (AWS)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Setup Cost</TableCell>
            <TableCell align="center">₦5M+</TableCell>
            <TableCell align="center">₦1.5M</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monthly Cost</TableCell>
            <TableCell align="center">₦200k fixed</TableCell>
            <TableCell align="center">₦50k–150k variable</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Uptime</TableCell>
            <TableCell align="center">98%</TableCell>
            <TableCell align="center">99.99%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Security</TableCell>
            <TableCell align="center">Basic</TableCell>
            <TableCell align="center">Enterprise-grade</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h6" gutterBottom>
        Conclusion
      </Typography>
      <Typography paragraph>
        While initial setup may seem similar, the long-term savings and
        scalability of cloud make it the better investment.
      </Typography>
    </Container>
  );
}
