import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

export default function LibrarySystems() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Koha Implementation Services
      </Typography>
      <Typography paragraph>
        Modernize your library operations with tailored Koha implementations —
        fully customized to your collection size and user needs.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Implementation Process
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Week 1–2: Needs Assessment" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Week 3–6: System Configuration" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Week 7–8: Data Migration" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Week 9–10: Training & Go-Live" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Cataloging (MARC21, Dublin Core)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="OPAC & Circulation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Reports & Statistics" />
        </ListItem>
        <ListItem>
          <ListItemText primary="User Access Control" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Benefits
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="60% reduction in cataloging time" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Eliminate licensing fees (open source)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Modern, intuitive interface" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Integration with other systems" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Scalable with growing collections" />
        </ListItem>
      </List>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          href="/services/library-systems#dspace"
        >
          Learn About DSpace Solutions
        </Button>
      </Box>
    </Container>
  );
}
