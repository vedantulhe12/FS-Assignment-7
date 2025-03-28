import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Website</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/signup" className="nav-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
