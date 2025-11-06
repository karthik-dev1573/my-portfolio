import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
import { navItems, contactDatas } from "../Constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialClass = (name) => {
    switch (name) {
      case "Gmail":
        return "gmail";
      case "WhatsApp":
        return "whatsapp";
      case "GitHub":
        return "github";
      case "Phone":
        return "phone";
      default:
        return "";
    }
  };

  return (
    <footer className="footerContainer">
      <div className="footerWrapper">
        {/* Left Section - Name & Subtext */}
        <div className="footerLeft">
          <h2 className="footerName">Karthik</h2>
          <p className="footerSubtext">
            Passionate Full Stack Developer crafting creative and
            high-performance web experiences.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="footerMiddle">
          <h3 className="footerTitle">Navigation</h3>
          <ul className="footerNav">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `footerLink ${isActive ? "activeLink" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footerRight">
          <h3 className="footerTitle">Let's Connect</h3>
          <div className="socialIcons">
            {contactDatas.map((contact, index) => {
              const Icon = contact.icon;
              const socialClass = getSocialClass(contact.name);
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`socialIcon ${socialClass}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footerBottom">
        <p>© {currentYear} Karthik P — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
