import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import { Divider, Avatar } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton sx={{mb:10}}>
      <ListItemIcon>
      <Avatar/>
      </ListItemIcon>
      <ListItemText primary="Project Name" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GridViewIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Issues" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ManageHistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Activity" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Sprints" />
    </ListItemButton>
    <Divider sx={{my:3}}/>
    <ListItemButton>
      <ListItemIcon>
        <AppSettingsAltIcon />
      </ListItemIcon>
      <ListItemText primary="Project Settings" />
    </ListItemButton>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );