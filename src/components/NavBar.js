import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  /* Add basic styling for NavLinks */
  const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <NavLink
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        to="/movies"
      >
        Movies
      </NavLink>

      <NavLink
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        to="/directors"
      >
        Directors
      </NavLink>

      <NavLink
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        to="/actors"
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
