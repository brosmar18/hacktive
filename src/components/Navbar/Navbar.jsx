import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/logo.png" alt="logo" />
      <div className="nav__links">
        {navLinks.map((link, index) => (
          <Link key={`navbar-link-${index}`} to={link.route} className="nav__link">
            {link.label}
          </Link>
        ))}
      </div>
      <img src="/search.svg" alt="search icon" className="nav__search" />
    </nav>
  );
};

export default Navbar;
