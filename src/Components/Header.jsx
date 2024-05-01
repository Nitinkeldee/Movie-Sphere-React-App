import React from "react";

function Header({ searchQuery, handleSearchChange }) {
  return (
    <div className="Header card-wrapper correcter width88">
      <h1>MovieSphere</h1>
      <div className="flexrow">
        <input
          className="inputtaker"
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* <span>Search</span> */}
      </div>
    </div>
  );
}

export default Header;
