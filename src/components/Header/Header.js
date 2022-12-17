import { Link, NavLink } from "react-router-dom";

// icons
import { FaPlay } from "react-icons/fa";

// styles

import "./Header.css";

const Header = () => {
  return (
    <header className="nav-bar">
      <nav className="nav-Links">
        <Link to="/">
          <h2 className="logo">
            mg
            <FaPlay />
            <span>filmes</span>
          </h2>
        </Link>
        <ul className="list-nav-links">
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
