import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import ChapterChat from "../../assets/ChapterChat.svg";

export function ProfileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={ChapterChat} alt="ChapterChat logo" />
        </Link>
      </div>
    </nav>
  );
}
