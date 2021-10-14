import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburherIcon = (
    <CgMenu
      className="hamburger"
      size="40"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="hamburger"
      size="40"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="nav-bar mobile-navigation">
      {open ? closeIcon : hamburherIcon}
      {open && <NavLinks isMoblile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
