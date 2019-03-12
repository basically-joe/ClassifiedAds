import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <button>
      <Link to="/home">Home</Link>
    </button>
    <button>
      <Link to="/createad">Create Ad</Link>
    </button>
  </ul>
);

export default Navbar;