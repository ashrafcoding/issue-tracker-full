import { ListItemButton, ListItemIcon, Box, Avatar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";

export const Sidebar = () => {
  return (
    <Box height="100vh" width={60}>
      <Box bgcolor="red" height="15vh" sx={{ borderBottomRightRadius: 20 }}>
        <ListItemButton sx={{ py: 4 }}>
          <ListItemIcon>
            <BugReportIcon sx={{ fontSize: 35 }} />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box height="10vh">
        <ListItemButton sx={{ py: 2 }}>
          <ListItemIcon>
            <DashboardIcon sx={{ fontSize: 35 }} />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box
        bgcolor="red"
        height="75vh"
        sx={{ borderTopRightRadius: 20 }}
        flexDirection="column"
        justifyContent="space-between"
        display="flex"
      >
        <Box>
          <ListItemButton sx={{ py: 2, px: 1.5 }}>
            <ListItemIcon>
              <PersonOutlineIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
          </ListItemButton>
        </Box>
        <Box>
          <ListItemButton sx={{ px: 1.5 }}>
            <ListItemIcon>
              <SettingsIcon sx={{ fontSize: 35 }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton sx={{ py: 2, px: 1.2 }}>
            <Avatar />
          </ListItemButton>
        </Box>
      </Box>
    </Box>
  );
};
