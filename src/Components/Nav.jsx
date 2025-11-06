import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";
import { navItems } from "../Constants/data";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon */}
      <div className="menuIcon" onClick={handleToggle}>
        {menuOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>

      {/* Nav Links */}
      <div className={`navItems ${menuOpen ? "open" : ""}`}>
        {navItems.map((navItem, index) => (
          <NavLink
            key={index}
            to={navItem.path}
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {navItem.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
