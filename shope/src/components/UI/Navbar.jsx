import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; 
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FiShoppingBag size={24} />
          <span>ShopMe</span>
        </Link>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/TopRated">Top Rated</Link>
          <Link to="/KidsWear">Kids Wear</Link>
          <Link to="/MensWear">Mens Wear</Link>
          <Link to="/electronics">Electronics</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
