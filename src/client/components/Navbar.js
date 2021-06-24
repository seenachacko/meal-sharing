import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";


const NavBar = () => {
  return (
    <header className="header-container">
       <span className="logo">Hot♨Oven</span>
      <nav className="nav-bar" >
        <ul className="nav-ul">
         <Link to="/">  <li>Home</li></Link>
          <Link to="/meals"> <li>Meals</li></Link>
          <Link to="/addingMeals"> <li>Admin</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;