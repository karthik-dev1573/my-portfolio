import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";
import { navItems } from "../Constants/data";

const Nav = () => {
  return (
    <nav>
      <div className="navItems">
        {navItems.map((navItem, index) => {
          return (
            <NavLink key={index} to={navItem.path}>
              {navItem.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
