import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          How long does a typical cloud migration take?
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Depending on complexity, migrations typically take 4-12 weeks. We
            provide detailed timelines during the assessment phase.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Do you offer staff training?
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! Comprehensive training is included in all our packages, with
            ongoing support available.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          What if something goes wrong after launch?
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our support team provides immediate assistance. All implementations
            include warranty periods with free fixes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
