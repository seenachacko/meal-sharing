import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
const Navigation = () =>{
    return(
        <nav className="nav-bar navigation">
        <ul className="nav-ul">
        <NavLinks/>
        </ul>
        </nav>
    );
}
export default Navigation;