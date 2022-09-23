import React from "react";
import "./Navbar.css";
import avatar from "./Images/avatar2.jpg";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navlinks">
        <h1>LOGO</h1>
        <a href="#">Dashboard</a>
        <a href="#">Employees</a>
        <a href="#">Reports & Insights</a>
        <a href="#">Tools</a>
      </div>
      <NavDropdown
        title={
          <div>
            <img src={avatar} className="nav-image dropdown-toggle::after" />
          </div>
        }
      >
        <NavDropdown.Item id="one" className="dropdown-link" href="#action3">
          <ion-icon
            style={{ fontSize: "25px", position: "relative", bottom: "5px" }}
            name="person-circle-outline"
          ></ion-icon>
          <h6>My Profile</h6>
        </NavDropdown.Item>
        <NavDropdown.Item id="two" className="dropdown-link" href="#action4">
          <p>Change settings of your account.</p>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item id="three" className="dropdown-link" href="#action5">
          <ion-icon
            style={{ fontSize: "25px", position: "relative", bottom: "5px" }}
            name="log-in-outline"
          ></ion-icon>
          <h6>Logout</h6>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
    
  );
};

export default Navbar;
