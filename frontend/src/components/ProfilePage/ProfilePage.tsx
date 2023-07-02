import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { getUserById } from "../../services/ExpressService";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import ProfileImage from "../../assets/ProfileImage.png";
import "./ProfilePage.css";

export function ProfilePage() {
  const id = useParams().id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserById(id!).then((data) => setUser(data));
  }, [id]);

  return (
    <div id="member-list-container">
      <Header />

      <div id="member-list">
        <h1>
          {user?.firstname} {user?.lastname}
        </h1>
        <img src={ProfileImage} alt="Profile Image" />
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>Member since: {user?.membersince}</p>
      </div>
    </div>
  );
}
