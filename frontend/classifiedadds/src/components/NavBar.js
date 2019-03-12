import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (

  <ul>
    <button>
      <Link to="/home">HOME</Link>
    </button>
    <button>
      <Link to="/createad">CREATE NEW AD</Link>
    </button>
    <button>
      <Link to="/filter">FILTER</Link>
    </button>

  </ul>
);

export default Navbar;
