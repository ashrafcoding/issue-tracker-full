import { useState } from "react";
import {
  Divider,
  Box,
  Typography,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Menu,
  MenuItem,
} from "@mui/material";
import { Assignment, MoreVert } from "@mui/icons-material";

function Project() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ maxWidth: 345, cursor:"pointer" }} >
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
        }
        sx={{ px: 1, py: 0 }}
      />
      <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>settings</MenuItem>
            <MenuItem onClick={handleClose}>delete project</MenuItem>
            <MenuItem onClick={handleClose}>archive project</MenuItem>
          </Menu>
      <CardContent>
        <Box display="flex">
          <Assignment sx={{ color: "red", fontSize: "50px" }} />
          <Box ml={2}>
            <Typography variant="h6" component="h2">
              Project Name
            </Typography>
            <Typography variant="body2" component="p">
              Team Name
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" component="p">
            Open: 10/20
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2" component="p">
            Closed: 5/20
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Project;
