import { navLinks } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import { logo } from "../../assets";
import "./Navbar.scss";

const Menu = () => (
  <>
    {navLinks.map((link, index) => (
      <NavLink className="link" key={`navbar-links-${index}`} to={link.route}>
        {link.label}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <div className="nav__links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav__links-container">
          <Menu />
        </div>
      </div>
      <div className="nav__links-auth">
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;