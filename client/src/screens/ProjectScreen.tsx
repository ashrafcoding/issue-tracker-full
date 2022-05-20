import { Box, Container } from "@mui/material";
import Project from "../components/project/Project";
import SearchProject from "../components/project/SearchProject";

function ProjectScreen() {
  return (
    <Container maxWidth="lg" sx={{py:3, maxHeight:'100vh', overflow:'auto'}}>
      <SearchProject />
      <Box display="flex" flexWrap="wrap" gap={3} mt={3} >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Project key={i} />
        ))}
      </Box>
    </Container>
  );
}

export default ProjectScreen;
