import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assests/image.png";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Logo} alt="Cgc-logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/courses">Course</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
