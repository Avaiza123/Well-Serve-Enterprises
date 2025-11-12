import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo + Name */}
        <Link to="/" className="header-logo-group">
          <img
            src="/src/assets/logo.png"
            alt="Well Serve Logo"
            className="header-logo"
          />
          <span className="header-title">Well Serve Enterprises</span>
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/about" className="nav-link">
          About
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
