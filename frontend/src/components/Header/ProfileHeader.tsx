import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileHeader.css"; // Import CSS file for styling
import ChapterChat from "../../assets/bookmarklogo.svg";

export function ProfileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <img src={ChapterChat} alt="ChapterChat logo" />
        <h1>ChapterChat</h1>
      </div>
    </nav>
  );
}
