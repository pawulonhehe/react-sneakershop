import React from "react";
import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="box">
        <form action="" className="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};
