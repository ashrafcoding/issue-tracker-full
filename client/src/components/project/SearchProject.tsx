import React, {useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Autocomplete, TextField, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProjectModal from "./ProjectModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  border: "1px solid #ced4da",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = ["Option 1", "Option 2"];



function SearchProject() {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box display="flex" justifyContent="space-between" py={2}>
      <Box display="flex">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box mx={2}>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 100 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </Box>
        <Box>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 100 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </Box>
      </Box>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + create project
      </Button>
      <ProjectModal open={open} setOpen={setOpen}/>
    </Box>
  );
}

export default SearchProject;
