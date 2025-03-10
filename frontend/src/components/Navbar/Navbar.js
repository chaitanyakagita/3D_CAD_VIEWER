import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo-text">3D CAD Viewer</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
        <Link to="/convert" className="nav-link">Convert</Link>
      </div>
    </nav>
  );
};

export default Navbar;