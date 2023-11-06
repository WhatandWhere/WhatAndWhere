import React from "react";
import { Link } from "react-scroll";
import { Button } from "./Button";
import "../../components/design-files-css/entry-page/Navbar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="title">
              <div className="title-primary">What and</div>
              <div className="title-secondary">Where</div>
            </div>
            <img className="nav-logo" src="./logoForHeader.png" alt="Logo" />
          </Link>

          <div className="nav-buttons">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="nav-links"
            >
              Home
            </Link>
            <Link
              to="g-wrapper"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="nav-links"
            >
              About
            </Link>
            <Button buttonStyle="primary-medium">SIGN UP</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
