import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
} from "@mui/material";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function LibrarySystems() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <LibraryBooksIcon color="primary" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Koha Implementation Services
        </Typography>
        <Typography variant="subtitle1">
          Complete library automation solution tailored to your collection size
          and user needs.
        </Typography>
      </Box>

      {/* Step-by-Step Process */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Implementation Process
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Week 1–2: Needs Assessment
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Current system analysis</li>
              <li>Requirements gathering</li>
              <li>Workflow mapping</li>
              <li>User interviews</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Week 3–6: System Configuration
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Server setup and installation</li>
              <li>Cataloging setup</li>
              <li>User permissions</li>
              <li>Custom integrations</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Week 7–8: Data Migration
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Data cleaning and mapping</li>
              <li>Bulk import processes</li>
              <li>Data validation</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Card>

      {/* Features */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Key Features
        </Typography>
        <ul>
          <li>
            <strong>Cataloging:</strong> MARC21, Dublin Core standards
          </li>
          <li>
            <strong>OPAC:</strong> Online Public Access Catalog
          </li>
          <li>
            <strong>Reports:</strong> Custom reports and statistics
          </li>
          <li>
            <strong>Multi-format Support:</strong> Books, media, digital assets
          </li>
        </ul>
      </Card>

      {/* CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" href="/contact">
          Request a Demo
        </Button>
      </Box>
    </Container>
  );
}
