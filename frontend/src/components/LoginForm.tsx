import { Header } from "./Header/Header";

export function Login() {
  return (
    <div>
      <Header />
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
