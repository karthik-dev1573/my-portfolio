import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer





// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../Styles/Footer.css";
// import { navItems, contactDatas } from "../Constants/data";

// const Footer = () => {
//   return (
//     <footer className="footerContainer">
//       {/* Left section - Name */}
//       <div className="footerLeft">
//         <h2 className="footerName">© 2025 Karthik P</h2>
//       </div>

//       {/* Middle section - Nav links */}
//       <div className="footerCenter">
//         {navItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className="footerLink"
//             activeclassname="active"
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Right section - Social media icons */}
//       <div className="footerRight">
//         {contactDatas.map((contact, index) => {
//           const Icon = contact.icon;
//           return (
//             <a
//               key={index}
//               href={contact.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="footerIcon"
//               title={contact.name}
//             >
//               <Icon size={22} />
//             </a>
//           );
//         })}
//       </div>
//     </footer>
//   );
// };

// export default Footer;


