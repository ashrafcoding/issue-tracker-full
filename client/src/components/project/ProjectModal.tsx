import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "60vh",
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 10,
};

function ProjectModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const teams = ["team1", "team2", "team3"];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="primary"
            mb={5}
          >
            Create New Project
          </Typography>
          <Box
            mb={7}
            display="flex"
            gap={3}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <TextField
              label="Project Name"
              value={input}
              onChange={handleChange}
              placeholder="Enter Project Name"
              variant="standard"
              fullWidth={true}
            />
            <TextField
              select
              value={input}
              onChange={handleChange}
              label="Team"
              variant="standard"
              fullWidth={true}
            >
              {teams.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Stack mt={3} spacing={3} direction="row-reverse">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectModal;
