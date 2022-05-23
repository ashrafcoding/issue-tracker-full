import React, {useState} from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Autocomplete, TextField, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper } from "../project/SearchProject";

const options = ["Option 1", "Option 2"];

function SearchIssue() {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
  return (
    <div>SearchIssue</div>
  )
}

export default SearchIssue