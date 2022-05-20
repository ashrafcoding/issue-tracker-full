import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./screens/Dashboard";
import IssueScreen from "./screens/IssueScreen";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Sidebar } from "./components/navbar/Sidebar";
import ProjectScreen from "./screens/ProjectScreen";


const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Navbar />
        {/* <Dashboard /> */}
        <ProjectScreen/>
        {/* <IssueScreen /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
