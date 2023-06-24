import { ProfileHeader } from "./Header/ProfileHeader";

export function Login() {
  return (
    <div>
      <ProfileHeader />
      <form>
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="text"></input>
        <a>New User?</a>
        <button>Log In</button>
      </form>
    </div>
  );
}
