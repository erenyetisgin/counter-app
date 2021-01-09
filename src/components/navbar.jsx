import React from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Render");
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">{totalCounters}</span>
      </div>
    </nav>
  );
};

export default Navbar;
