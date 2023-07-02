import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import logo from "../../assets/bookmarklogo.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <img src={logo} alt="chapterChat logo" />
        <h1>ChapterChat</h1>
      </div>

      <div>
        <input
          className="side-menu"
          type="checkbox"
          id="side-menu"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
      </div>
      <div className={isMenuOpen ? "nav" : "nav hidden"}>
        <ul className="menu">
          <li>
            <Link to="/feed">Home</Link>
          </li>
          <li>
            <Link to="/users">Members</Link>
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
