import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <img src="/logo.png" alt="logo" className="logo" />
        <div className="nav__links">
          {navLinks.map((link, index) => (
            <Link
              key={`navbar-link-${index}`}
              to={link.route}
              className="nav__link"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <img src="/search.svg" alt="search icon" className="nav__search" />
        <div className="nav__mobile">
          <img
            src={menu}
            alt="menu icon"
            onClick={toggleNavbar}
            className="nav__mobile-icon"
          />
        </div>
      </div>
      <div className={`nav__mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="nav__mobile-header">
          <img src="/logo.png" alt="logo" className="nav__mobile-logo" />
          <img
            src={close}
            alt="close icon"
            onClick={toggleNavbar}
            className="nav__mobile-close"
          />
        </div>
        <ul className="nav__mobile-links">
          {navLinks.map((link, index) => (
            <li key={`mobile-link-${index}`}>
              <Link to={link.route} onClick={toggleNavbar}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
