import React, { useState } from "react";

function Navbar() {
  // State to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle the toggle when the menu button is clicked
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#" className="logo">
            Job<span>Find</span>
          </a>
        </div>
        <div
          className="nav__menu__btn"
          id="menu-btn"
          onClick={handleMenuToggle}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${menuOpen ? "open" : ""}`} id="nav-links">
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#job" onClick={closeMenu}>
            Jobs
          </a>
        </li>
        <li>
          <a href="#service" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <button className="btn" onClick={closeMenu}>
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
