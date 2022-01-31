import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const NavLinks = (props) => {
    console.log(props.closeMobileMenu);
  return (
    <ul className="nav-ul">
      <Link to="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
        <li>Home</li>
      </Link>
      <Link to="/meals" onClick={() => props.isMobile && props.closeMobileMenu()}>
        <li>Meals</li>
      </Link>
      <Link to="/addingMeals" onClick={() => props.isMobile && props.closeMobileMenu()}>
        <li>Admin</li>
      </Link>
    </ul>
  );
};
export default NavLinks;
