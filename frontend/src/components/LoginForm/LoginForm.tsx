import React from "react";
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
          <a className="link">New User?</a>
          <button className="button">Log In</button>
        </form>
      </div>
    </div>
  );
}
