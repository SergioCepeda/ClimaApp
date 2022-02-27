import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className = { styles.nav }>
      
      <NavLink className = { styles.navLink } to = "/home" exact>☔</NavLink>
      <NavLink className = { styles.navLink } to = "/aboutMe">☀</NavLink>
    </nav>
  );
}; 

export default Nav;