import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";

const Nav = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
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
