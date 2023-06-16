import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import Bookmark from "../../assets/bookmark.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Bookmark} alt="bookmark logo" />
        </Link>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/feed" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
      </div>
    </nav>
  );
}
