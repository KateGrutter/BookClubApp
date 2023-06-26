import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import Bookmark from "../../assets/bookmark.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={Bookmark} alt="bookmark logo" />
        </Link>
      </div>

      <div>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
      </div>
      <div className="nav">
        <ul className="menu">
          <li>
            <Link to="/feed">Home</Link>
          </li>
          <li>
            <Link to="/users/:id">Members</Link>
          </li>
          <li>
            <Link to="/past-reads">Past Reads</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
