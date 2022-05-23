import { Paper, Avatar, Box, Typography, Checkbox } from "@mui/material";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

function IssueCard() {
  return (
    <Paper
      sx={{
        display: "flex",
        gap: 1,
        my: 2,
        p: 2,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Checkbox
        icon={<RadioButtonUncheckedRoundedIcon />}
        checkedIcon={<CheckCircleRoundedIcon />}
        checked={true}
      />
      <Box>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          PRO1
        </Typography>
        <Typography variant="caption">added 1 month ago</Typography>
      </Box>
      <Typography
        variant="body2"
        component="p"
        sx={{ lineHeight: 4, color: "red" }}
      >
        High
      </Typography>
      <Box px={2}>
        <Typography variant="body1" component="p">
          integrate with jira and slake
        </Typography>
        <Box display="flex" gap={2}>
          <Typography variant="caption" component="p">
            BUG
          </Typography>
          <Typography variant="caption" component="p">
            functional
          </Typography>
          <Typography variant="caption" component="p">
            ux
          </Typography>
          <Typography variant="caption" component="p">
            added on 12 jan 2022 by oliver
          </Typography>
        </Box>
        <Typography variant="body2" component="p">
          you can integrate with jira and slake
        </Typography>
      </Box>
      <Typography
        variant="body2"
        component="p"
        sx={{ lineHeight: 4, color: "red" }}
      >
        New
      </Typography>
      <Avatar sx={{ width: 30, height: 30, alignSelf: "center" }} />
      <Box sx={{ alignSelf: "center", display: "flex", gap: 1 }}>
        <ChatBubbleOutlineRoundedIcon />
        <Typography>0/3</Typography>
      </Box>
    </Paper>
  );
}

export default IssueCard;
