import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <header className="header-container">
       <div className="logo">Hot♨Oven Meal sharing</div>
      <Navigation/>
      <MobileNavigation/>
    </header>
  );
};

export default NavBar;