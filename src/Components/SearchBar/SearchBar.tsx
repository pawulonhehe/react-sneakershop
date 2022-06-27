import React from "react";
import "./SearchBar.scss";
import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Wyszukaj"
        />
      </div>
    </div>
  );
};
