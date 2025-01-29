import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        {/* <a href="/" className="logo">
          Vidyanidhi
        </a> */}

        {/* Navigation Links */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#placements">Placements</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#campus-life">Campus Life</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#get-in-touch">Get in Touch</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;