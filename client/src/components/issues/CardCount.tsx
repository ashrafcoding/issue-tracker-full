import { Box, Typography, Paper } from "@mui/material";
import PestControlIcon from "@mui/icons-material/PestControl";

function CardCount() {
  return (
    <Paper
      sx={{
        minWidth: 150,
        width: '23%',
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        my: 2,
      }}
    >
      <PestControlIcon sx={{fontSize:45}}/>
      <Box>
        <Typography>3</Typography>
        <Typography>total</Typography>
      </Box>
    </Paper>
  );
}

export default CardCount;
