import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function LibrarySystems() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Koha Library Implementation
      </Typography>

      <Typography paragraph>
        Complete library automation solution using open-source Koha software,
        tailored to your collection size and user needs.
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
    </Container>
  );
}
