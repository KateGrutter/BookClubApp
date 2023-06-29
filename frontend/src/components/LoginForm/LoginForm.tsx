import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileHeader } from "../Header/ProfileHeader";
import "./LoginForm.css";
import { signInWithGoogle, signOut } from "../../firebaseConfig";
import { User } from "../../models/User";
import { getUserByEmail } from "../../services/ExpressService";
import AuthContext from "../../AuthContext";
import googleLogo from "../../assets/googleLogo.png"

export function Login() {
  
  const { user } = useContext(AuthContext)
  const [thisUser, setThisUser] = useState<User>()

  useEffect(() => {
    const existingUser = getUserByEmail(user?.email!).then((res) => {setThisUser(res)})
  })

  // async function GoogleLogin() {
  //   let googleUser = signInWithGoogle()
  //   setThisUser(await getUserByEmail(googleUser.email))
  // }
  
  
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
      <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signOut}>Sign out</button>
      <p>
        <Link to="/feed">bypass login</Link>
      </p>
    </div>
  );
}
