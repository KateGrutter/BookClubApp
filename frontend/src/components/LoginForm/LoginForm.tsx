import React from "react";
import { Link } from "react-router-dom";
import { ProfileHeader } from "../Header/ProfileHeader";
import "./LoginForm.css";

export function Login() {
  return (
    <div>
      <ProfileHeader />
      <div className="container">
        <form className="form">
          <label className="label">Username</label>
          <input type="text" className="input" />
          <label className="label">Password</label>
          <input type="password" className="input" />
          <p className="new-user">
            <Link to="/new-user">New User?</Link>
          </p>
          <button className="button">Login</button>
        </form>
      </div>
      <p>
        <Link to="/feed">bypass login</Link>
      </p>
    </div>
  );
}
