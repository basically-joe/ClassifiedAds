import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  
  <ul>
    <li>
      <Link to="/home">HOME</Link>
    </li>
    <li>
      <Link to="/createad">CREATE NEW AD</Link>
    </li>
  </ul>
);

export default Navbar;
