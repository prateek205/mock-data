import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbarsection">
        <div className="navheading">
          <NavLink to={"/"} style={{textDecoration:"none", color:"inherit"}}>
          <h4>Electronic</h4>
          </NavLink>
        </div>

        <div className="navitem">
        <NavLink to={"/cart"} style={{textDecoration:"none", color:"inherit"}}>
          <p>Cart</p>
        </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
