import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import Bookmark from "../../assets/bookmark.svg";

export function ProfileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={Bookmark} alt="bookmark logo" />
        </Link>
      </div>
    </nav>
  );
}
