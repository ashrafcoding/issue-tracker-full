import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./screens/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import ProjectScreen from "./screens/ProjectScreen";


const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navbar />
        {/* <Dashboard /> */}
        <ProjectScreen/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
