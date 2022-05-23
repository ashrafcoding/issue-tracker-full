import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Tag from "./Tag";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
//   height: "60vh",
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
};

const Input = styled("input")({
  display: "none",
});

function IssueModal({
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" noValidate autoComplete="off">
        <Box
          display="flex"
          bgcolor="primary.main"
          justifyContent="space-between"
          p={1}
          borderRadius="6px 6px 0 0"
          color="white"
        >
          <Typography>Add New Issue</Typography>
          <CloseRoundedIcon />
        </Box>
        <Box
          mb={7}
          display="flex"
          justifyContent='space-between'
          gap={2}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box p={2} width='80%'>
            <TextField
              id="standard"
              label="Summary"
              fullWidth={true}
              value={input}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              id="standard"
              label="Description"
              fullWidth={true}
              value={input}
              multiline
              rows={4}
              onChange={handleChange}
              sx={{ my: 2 }}
            />
            <Typography>Assignee</Typography>
            <IconButton>
              <PersonAddAltIcon />
            </IconButton>
            <Typography>Attachment</Typography>
            <label htmlFor="outlined-button-file">
              <Input
                accept="image/*"
                id="outlined-button-file"
                multiple
                type="file"
              />
              <Button variant="outlined" component="span" size="small">
                Browse
              </Button>
            </label>
          </Box>
          <Box p={2}>
            <Tag koko='BUG'/>
            <Tag koko='observation'/>
            <Tag koko='question'/>
          </Box>
        </Box>
        <Stack mt={3} spacing={3} direction="row-reverse" p={3}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default IssueModal;
