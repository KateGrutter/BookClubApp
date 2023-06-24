import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../models/User";
import { ProfileHeader } from "../Header/ProfileHeader";
import "./NewUserForm.css";

export function NewUserForm(props: { onAdd: (newUser: User) => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <ProfileHeader />
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            firstName: firstName,
            lastName: lastName,
            memberSince: memberSince,
            email: email,
            userName: userName,
          };

          props.onAdd(newUser);
        }}
      >
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          {" "}
          Last Name:
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Member Since:
          <input
            value={memberSince}
            onChange={(e) => setMemberSince(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Username:
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        <Link to="/feed">bypass create-user form</Link>
      </p>
    </div>
  );
}
