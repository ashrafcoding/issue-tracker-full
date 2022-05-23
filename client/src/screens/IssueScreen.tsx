import { useState } from "react";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CardCount from "../components/issues/CardCount";
import Issue from "../components/issues/IssueCard";
import IssueModal from "../components/issues/IssueModal";

function IssueScreen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 3, maxHeight: "100vh", overflow: "auto" }}
    >
      <Box display="flex" mt={3} justifyContent="space-between">
        <Typography variant="h6" component="h2" color="primary" mb={5}>
          Issues
        </Typography>
        <Box>
          <IconButton sx={{ mx: 2 }}>
            <PersonAddAltIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            +Add Issue
          </Button>
          <IssueModal open={open} setOpen={setOpen} />
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={3}>
        <CardCount />
        <CardCount />
        <CardCount />
        <CardCount />
      </Box>
      <Box>
        <Issue />
        <Issue />
        <Issue />
      </Box>

    </Container>
  );
}

export default IssueScreen;
